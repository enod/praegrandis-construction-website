// Simple test script to verify Notion integration
// Run with: node test-notion.js

const dotenv = require('dotenv')
dotenv.config({ path: '.env.local' })

const { Client } = require('@notionhq/client')

async function testNotionConnection() {
  console.log('🧪 Testing Notion Integration...\n')
  
  // Check environment variables
  console.log('📋 Environment Check:')
  console.log('NOTION_TOKEN:', process.env.NOTION_TOKEN ? '✅ Set' : '❌ Missing')
  console.log('NOTION_DATABASE_ID:', process.env.NOTION_DATABASE_ID ? '✅ Set' : '❌ Missing')
  
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    console.log('\n❌ Missing environment variables. Please:')
    console.log('1. Copy .env.local.example to .env.local')
    console.log('2. Add your Notion integration token and database ID')
    console.log('3. Make sure your database is shared with the integration')
    return
  }
  
  // Test connection
  console.log('\n🔌 Testing Connection...')
  
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  
  try {
    // Test database query
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      page_size: 1
    })
    
    console.log('✅ Connection successful!')
    console.log(`📊 Database contains ${response.results.length} accessible entries`)
    
    if (response.results.length > 0) {
      const firstProject = response.results[0]
      console.log('\n📄 Sample Project Data:')
      console.log('ID:', firstProject.id)
      console.log('Title:', firstProject.properties.Title?.title?.[0]?.plain_text || 'No title')
      console.log('Type:', firstProject.properties.Type?.select?.name || 'No type')
      console.log('Status:', firstProject.properties.Status?.select?.name || 'No status')
    }
    
    console.log('\n🎉 Notion integration is ready!')
    
  } catch (error) {
    console.log('❌ Connection failed:', error.message)
    console.log('\n🔧 Troubleshooting:')
    console.log('1. Check your integration token is correct')
    console.log('2. Verify the database ID is correct')
    console.log('3. Make sure the database is shared with your integration')
    console.log('4. Check that your integration has the correct permissions')
  }
}

testNotionConnection()