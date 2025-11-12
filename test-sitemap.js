#!/usr/bin/env node

/**
 * Sitemap Validation Script
 * Tests the sitemap generation and validates XML structure
 */

const http = require('http');

console.log('🔍 Testing sitemap...\n');

// Test localhost sitemap
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/sitemap.xml',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
  }
};

const req = http.request(options, (res) => {
  console.log(`✅ Status Code: ${res.statusCode}`);
  console.log(`✅ Content-Type: ${res.headers['content-type']}\n`);

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('📄 Sitemap Content:\n');
    console.log(data);
    
    // Basic validation
    if (data.includes('<?xml') && data.includes('<urlset') && data.includes('</urlset>')) {
      console.log('\n✅ Sitemap appears to be valid XML');
      
      // Count URLs
      const urlCount = (data.match(/<url>/g) || []).length;
      console.log(`✅ Total URLs: ${urlCount}`);
      
      // Check for required elements
      const hasLoc = data.includes('<loc>');
      const hasLastMod = data.includes('<lastmod>');
      console.log(`✅ Has <loc> elements: ${hasLoc}`);
      console.log(`✅ Has <lastmod> elements: ${hasLastMod}`);
      
    } else {
      console.log('\n❌ Sitemap XML structure is invalid');
    }
  });
});

req.on('error', (e) => {
  console.error(`❌ Error: ${e.message}`);
  console.log('\n⚠️  Make sure the development server is running:');
  console.log('   npm run dev');
});

req.end();
