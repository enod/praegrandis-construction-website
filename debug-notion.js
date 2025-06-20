// Debug script to see what's actually in your Notion database
const dotenv = require('dotenv')
dotenv.config({ path: '.env.local' })

const { Client } = require('@notionhq/client')

async function debugNotionData() {
  console.log('🔍 Debugging Notion Database Content...\n')
  
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    console.log('❌ Missing environment variables')
    return
  }
  
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  
  try {
    // Fetch raw data
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    })
    
    console.log(`📊 Found ${response.results.length} entries\n`)
    
    response.results.forEach((page, index) => {
      console.log(`Entry ${index + 1}:`)
      console.log('- ID:', page.id)
      console.log('- Properties:')
      
      Object.keys(page.properties).forEach(key => {
        const prop = page.properties[key]
        console.log(`  - ${key} (${prop.type}):`, getPropertyValue(prop))
      })
      console.log('')
    })
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

function getPropertyValue(property) {
  switch (property.type) {
    case 'title':
      return property.title?.map(t => t.plain_text).join('') || 'No title'
    case 'rich_text':
      return property.rich_text?.map(t => t.plain_text).join('') || 'No text'
    case 'select':
      return property.select?.name || 'No selection'
    case 'multi_select':
      return property.multi_select?.map(s => s.name).join(', ') || 'No selections'
    case 'checkbox':
      return property.checkbox ? 'True' : 'False'
    case 'date':
      return property.date?.start || 'No date'
    case 'number':
      return property.number || 'No number'
    case 'url':
      return property.url || 'No URL'
    case 'files':
      return `${property.files?.length || 0} files`
    default:
      return `${property.type} (${JSON.stringify(property).slice(0, 50)}...)`
  }
}

debugNotionData()