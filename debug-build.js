// Debug script to test build-time data fetching
const { getProjects } = require('./lib/notion-simple.ts');

async function debugBuild() {
  console.log('🏗️  Debug Build Process');
  console.log('Environment:', process.env.NODE_ENV);
  console.log('NOTION_TOKEN available:', !!process.env.NOTION_TOKEN);
  console.log('NOTION_DATABASE_ID available:', !!process.env.NOTION_DATABASE_ID);
  
  if (process.env.NOTION_TOKEN) {
    console.log('NOTION_TOKEN length:', process.env.NOTION_TOKEN.length);
  }
  
  if (process.env.NOTION_DATABASE_ID) {
    console.log('NOTION_DATABASE_ID length:', process.env.NOTION_DATABASE_ID.length);
  }
  
  console.log('\n🔄 Fetching projects...');
  
  try {
    const projects = await getProjects();
    console.log('\n📊 Build Results:');
    console.log('Total projects:', projects.length);
    
    projects.forEach((project, index) => {
      console.log(`${index + 1}. ${project.title}`);
      console.log(`   Location: ${project.location}`);
      console.log(`   Type: ${project.type}`);
      console.log(`   Featured: ${project.featured}`);
      console.log(`   Slug: ${project.slug}`);
      console.log(`   Story preview: ${project.story.substring(0, 100)}...`);
      console.log('');
    });
    
  } catch (error) {
    console.error('❌ Build Error:', error);
  }
}

debugBuild();