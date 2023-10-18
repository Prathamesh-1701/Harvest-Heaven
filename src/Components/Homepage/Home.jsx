import React, { useEffect } from 'react';
import { Box, Heading, Text, Button, VStack, Image, ChakraProvider } from '@chakra-ui/react';
import Coursel from './Coursel'
// import './Home.css'
import 'aos/dist/aos.css';
import AOS from 'aos'


const bgStyle = {
  // bgGradient='linear(to-r, green.200, pink.500)'
  // backgroundColor: '#61554D',
  backdropFilter: 'blur(0.01px)',
  backgroundImage: `url(https://img.freepik.com/free-photo/brown-soil-background-gardening_53876-133209.jpg?w=1060&t=st=1696231750~exp=1696232350~hmac=3aed6304a09c1a38c427688b05324b197990260aab1ae256397952796cede031)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};


const bgStyle1 = {
  // bgGradient='linear(to-r, green.200, pink.500)'
  // backgroundColor: '#61554D',
  backdropFilter: 'blur(0.01px)',
  backgroundImage: `url(https://evergreenagriculture.net/wp-content/uploads/2015/12/new_website_details_progress_soil_health_research_education_1_635437110770618378.jpg)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (


    <ChakraProvider>

      {/* <Box  > </Box> */}
      <Box p={{ base: '10px', md: '20px' }} marginTop={{ base: '100px', md: 'auto' }} className='Home '>

        <Heading as="h1" bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )'
          bgClip='text'
          fontSize='5xl'
          fontWeight='extrabold'
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0">
          Welcome to Our Agriculture Website!!
        </Heading>
        <Text fontSize="lg" mt={4} bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' margin={'2%'} as={'h4'} bgClip={'text'}>
          Your one-stop solution for all things agriculture.
        </Text>


        <Coursel />









        <VStack spacing={8} mt={10}>

          {/* Our Services */}

          <Box >
            <Heading as="h2" size="lg" bgClip='text' bgGradient='linear(to-r, #086010, #1BBA9D,#52AE22 )' style={bgStyle}>
              Our Services__________
            </Heading>



            <Box display={'flex'}
              width={'full'}
              // bg={'red'}
              padding={'2%'}
              justifyContent={'space-evenly'}
              alignItems={'space-evenly'}>
              <Image

                borderRadius='full'
                boxSize='25%'
                src='https://c0.wallpaperflare.com/preview/520/776/992/l5du8aeifpe63vdcb7mheo0aga.jpg'
                alt='#'
                data-aos="zoom-in"

              />

              <Image
                borderRadius='full'
                boxSize='20%'
                src='https://c0.wallpaperflare.com/preview/520/776/992/l5du8aeifpe63vdcb7mheo0aga.jpg'
                alt='#'
                data-aos="zoom-in"
              />

              <Image
                borderRadius='full'
                boxSize='15%'
                src='https://c0.wallpaperflare.com/preview/520/776/992/l5du8aeifpe63vdcb7mheo0aga.jpg'
                alt='#'
                data-aos="zoom-in"
              />


            </Box>






            <Text >
              we offer a range of comprehensive services to cater to all your needs. Our team of experts is dedicated to providing top-notch solutions tailored to your requirements.
            </Text>
            <Text fontSize='xl' as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )'
            > Service 1: Crop Consultation and Analysis</Text>
            <Text fontSize='md'>
              We offer in-depth crop consultation and analysis services, leveraging cutting-edge technologies to optimize your crop yield and quality. Our experts assess your crop health, provide insights, and recommend strategies for better results.
            </Text>
            <Text fontSize='xl' as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )'
            > Service 2: Precision Farming Solutions</Text>
            <Text fontSize='md'>
              Discover the power of precision farming with our advanced technological solutions. We utilize data analytics, IoT, and automation to help you make informed decisions, improve resource management, and maximize your agricultural output.
            </Text>
            <Text fontSize='xl' as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' > Service 3: Farm Equipment Rental and Leasingv</Text>
            <Text fontSize='md'>
              Discover the power of precision farming with our advanced technological solutions. We utilize data anaAccess a wide range of high-quality farm equipment and machinery through our rental and leasing services. Whether you need tractors, plows, or harvesters, we have you covered. Efficient and reliable equipment to streamline your farm operations.
            </Text>
            <Text fontSize='xl' as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )'> Service 4: Sustainable Agriculture Practices</Text>
            <Text fontSize='md'>
              Discover the power of precision farming with our advanced technologicalWe promote and implement sustainable agricultural practices to ensure long-term environmental and economic viability. Our experts guide you in adopting eco-friendly solutions that benefit both your farm and the planet.
            </Text>
            <Text fontSize='xl' as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' > Service 5: Educational Workshops and Training</Text>
            <Text fontSize='md'>
              Stay updated with the latest trends and advancements in the agricultural industry through our educational workshops and training programs. Enhance your knowledge, skills, and best practices to succeed in modern agriculture.
            </Text>
          </Box>

          <Box width='full' display="flex" flexDirection="row">
            <Box width="25%" height="60px" style={bgStyle1} data-aos="flip-left" data-aos-duration="2000">

            </Box>
            <Box width="25%" height="60px" style={bgStyle1} data-aos="flip-left" data-aos-duration="2000">

            </Box>
            <Box width="25%" height="60px" style={bgStyle1} data-aos="flip-left" data-aos-duration="2000">

            </Box>
            <Box width="25%" height="60px" style={bgStyle1} data-aos="flip-left" data-aos-duration="2000">

            </Box>
          </Box>




          {/* Latest Insights */}
          <Box>
            <Heading as="h2" size="lg" style={bgStyle} bgClip='text' bgGradient='linear(to-r, #086010, #1BBA9D,#52AE22 )'>
              Latest Insights__________
            </Heading>
            <Text >
              Stay informed and up-to-date with the latest trends, tips, and news in the agriculture industry. Our insights cover a range of topics to help you make informed decisions and achieve success in your agricultural endeavors.
            </Text>
            <Text fontSize='xl' as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' > Article 1: "10 Tips for Maximizing Crop Yields This Season"</Text>
            <Text fontSize='md'>
              Learn valuable strategies to enhance your crop yields and boost overall productivity. From soil preparation to irrigation, these tips can make a significant difference in your harvest.
            </Text>
            <Text fontSize='xl' as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' > Article 2: "The Future of Agriculture: Embracing Technology for Sustainable Farming"</Text>
            <Text fontSize='md'>
              Discover how technology is revolutionizing the agriculture sector, making farming more efficient, sustainable, and profitable. Explore the latest advancements and their potential impact on the future of farming.
            </Text>
            <Text fontSize='xl' as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' > Article 3: "Navigating Climate Challenges: Resilience in Agriculture"</Text>
            <Text fontSize='md'>
              Explore strategies and best practices to adapt to changing climate patterns and mitigate their impact on your farm. Building resilience is key to ensuring a successful harvest regardless of climate fluctuations.

            </Text>
            <Text fontSize='xl' as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' > Article 4: "Understanding Organic Farming: Benefits and Practices"</Text>
            <Text fontSize='md'>
              Delve into the world of organic farming and understand the numerous benefits it offers. Learn about organic farming practices, certification, and the growing demand for organic produce.
            </Text>
            <Text fontSize='xl' as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' > Article 5: "Farm-to-Table: A Guide to Direct Farm Marketing"</Text>
            <Text fontSize='md'>
              Discover the advantages of a farm-to-table approach and how to market your farm products directly to consumers. From farmers' markets to online sales, explore various marketing channels for your agricultural produce.
              Feel free to modify this content to reflect your specific articles, topics, and branding. You can add more articles, tailor the descriptions, and include any additional elements that align with the content and style of your website.
            </Text>
          </Box>


        </VStack>


        <Box display={'flex'}
          width={'full'}
          // bg={'red'}
          padding={'2%'}
          justifyContent={'space-evenly'}
          alignItems={'space-evenly'}>
          <Image

            borderRadius='full'
            boxSize='25%'
            src='https://c0.wallpaperflare.com/preview/520/776/992/l5du8aeifpe63vdcb7mheo0aga.jpg'
            alt='#'
            data-aos="zoom-in"

          />

          <Image
            borderRadius='full'
            boxSize='20%'
            src='https://c0.wallpaperflare.com/preview/520/776/992/l5du8aeifpe63vdcb7mheo0aga.jpg'
            alt='#'
            data-aos="zoom-in"
          />

          <Image
            borderRadius='full'
            boxSize='15%'
            src='https://c0.wallpaperflare.com/preview/520/776/992/l5du8aeifpe63vdcb7mheo0aga.jpg'
            alt='#'
            data-aos="zoom-in"
          />


        </Box>

        <Box mt={10}>
          <Heading as="h2" size="lg" style={bgStyle} bgClip='text' bgGradient='linear(to-r, #086010, #1BBA9D,#52AE22 )'>
            About Us__________
          </Heading>
          <Text>
            Your trusted partner in modern agriculture. We are a dedicated team of agricultural enthusiasts committed to revolutionizing the farming industry.
          </Text>

          <Text fontSize='xl' as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' > Our Vision</Text>
          <Text fontSize='md'>
            Empowering Farmers, Nourishing the World. Our vision is to empower farmers with innovative solutions, sustainable practices, and advanced technologies, ultimately contributing to a world where agriculture is more productive, efficient, and environmentally responsible.
          </Text>
          <Text fontSize='xl' as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' > Our Mission</Text>
          <Text fontSize='md' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )'>Leverage Innovation : </Text> <h1>Continuously innovate to enhance farming practices, productivity, and sustainability.</h1>
          <Text fontSize='md' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )'>Foster Knowledge :  </Text> <h1>Educate and inform farmers about the latest trends, technologies, and best practices in agriculture.</h1>
          <Text fontSize='md' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )'>Promote Sustainability :  </Text> <h1>Advocate for and implement sustainable and eco-friendly farming methods.</h1>
          <Text fontSize='md' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )'>Support the Community :  </Text> <h1>Engage with and support local farming communities, promoting economic growth and well-being.</h1>






        </Box>

        <Box mt={10}>
          <Heading as="h2" style={bgStyle} size="lg" bgClip='text' bgGradient='linear(to-r, #086010, #1BBA9D,#52AE22 )'>
            Ready to get started?
          </Heading>
          <Button bgGradient='linear(to-r, #086010, #1BBA9D,#52AE22 )' mt={2} border={'1px solid white'}

            color='white'
            _hover={{
              border: '1px solid #52AE22',
              background: 'white',
              // bgGradient:'linear(to-r, #086010, #1BBA9D,#52AE22 )',
              color: '#52AE22'
              // color:'white'
            }}
          >
            {/* <Box> */}
            Contact Us
          </Button>
        </Box>


      </Box>
    </ChakraProvider>
  );
};

export default Home;