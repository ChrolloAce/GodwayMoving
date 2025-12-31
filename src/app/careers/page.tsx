'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaCheck, FaUsers, FaTruck, FaHandshake, FaGraduationCap, FaRegCalendarAlt, FaRegSmile } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

// Job posting type definition
interface JobPosting {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  isExpanded: boolean;
}

const CareersPage = () => {
  const router = useRouter();
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([
    {
      id: 'professional-mover',
      title: 'Professional Mover',
      location: 'Miami, FL',
      type: 'Full-time',
      department: 'Operations',
      description: 'Join our team of professional movers to provide exceptional moving services throughout South Florida. You\'ll represent our high standards and careful handling in every move.',
      responsibilities: [
        'Safely load and unload client belongings with attention to detail',
        'Properly wrap and protect furniture and fragile items',
        'Efficiently pack and unpack client possessions when requested',
        'Operate moving trucks and equipment in a safe manner',
        'Provide excellent customer service throughout the moving process',
        'Complete all required paperwork accurately'
      ],
      requirements: [
        'Previous moving experience preferred but not required',
        'Strong physical stamina and ability to lift 50+ pounds regularly',
        'Valid driver\'s license with clean driving record',
        'Excellent customer service skills',
        'Reliable transportation to work location',
        'Ability to work flexible hours including weekends'
      ],
      isExpanded: false
    },
    {
      id: 'moving-team-lead',
      title: 'Moving Team Lead',
      location: 'Miami, FL',
      type: 'Full-time',
      department: 'Operations',
      description: 'We\'re looking for experienced team leaders who can manage small crews of movers while ensuring our professional standards are upheld. This position combines hands-on moving with leadership responsibilities.',
      responsibilities: [
        'Lead and coordinate teams of 2-4 movers on residential and commercial moves',
        'Train new team members on proper moving and packing techniques',
        'Conduct pre-move assessments and plan efficient moving strategies',
        'Communicate effectively with clients and address any concerns',
        'Ensure all safety protocols are followed during moves',
        'Complete and verify all moving documentation'
      ],
      requirements: [
        'Minimum 2 years of professional moving experience',
        'Previous supervisory experience preferred',
        'Excellent organizational and time management skills',
        'Strong problem-solving abilities',
        'Valid driver\'s license with clean driving record and ability to drive box trucks',
        'Bilingual (English/Spanish) preferred'
      ],
      isExpanded: false
    },
    {
      id: 'moving-consultant',
      title: 'Moving Consultant',
      location: 'Miami, FL',
      type: 'Full-time',
      department: 'Sales',
      description: 'Join our sales team to help clients plan their perfect move. You\'ll conduct in-home estimates, create customized moving plans, and serve as the first point of contact for our clients.',
      responsibilities: [
        'Conduct in-home or virtual assessments of clients\' moving needs',
        'Provide accurate quotes based on inventory and moving requirements',
        'Explain our services and answer client questions',
        'Convert leads into booked moves',
        'Coordinate with operations team to ensure client needs are communicated',
        'Follow up with clients after moves to ensure satisfaction'
      ],
      requirements: [
        'Previous sales experience, preferably in moving or related service industry',
        'Excellent verbal and written communication skills',
        'Proficiency with CRM software and office applications',
        'Valid driver\'s license and reliable transportation',
        'Strong closing skills and customer service orientation',
        'Bilingual (English/Spanish) preferred'
      ],
      isExpanded: false
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null as File | null,
    message: '',
  });

  const toggleJobExpand = (id: string) => {
    setJobPostings(prevJobs => 
      prevJobs.map(job => 
        job.id === id ? { ...job, isExpanded: !job.isExpanded } : job
      )
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Create a new object for webhook submission (different from the formData type)
    const webhookData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      resumeFileName: formData.resume ? formData.resume.name : null,
      message: formData.message
    };
    
    // Send data to webhook
    fetch('https://hook.us2.make.com/neln229u0by16e8y53nprbdbacgeabol', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    })
      .then(response => {
        console.log('Webhook response:', response);
        // Navigate to thank you page
        router.push('/thank-you?from=careers');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your form. Please try again.');
      });
  };

  // Benefits of working at the company
  const benefits = [
    { 
      icon: <FaUsers className="text-godway-green1 w-8 h-8" />, 
      title: "Supportive Team Culture", 
      description: "Join a diverse and inclusive team where your contributions are valued and recognized." 
    },
    { 
      icon: <FaGraduationCap className="text-godway-green1 w-8 h-8" />, 
      title: "Professional Growth", 
      description: "Access to training programs and clear paths for advancement within our organization." 
    },
    { 
      icon: <FaTruck className="text-godway-green1 w-8 h-8" />, 
      title: "Competitive Benefits", 
      description: "Health insurance, paid time off, and retirement plans to support your wellbeing." 
    },
    { 
      icon: <FaRegCalendarAlt className="text-godway-green1 w-8 h-8" />, 
      title: "Flexible Scheduling", 
      description: "We work with you to create schedules that balance work and personal commitments." 
    },
    { 
      icon: <FaHandshake className="text-godway-green1 w-8 h-8" />, 
      title: "Team Bonuses", 
      description: "Performance-based incentives and team bonuses for exceptional service." 
    },
    { 
      icon: <FaRegSmile className="text-godway-green1 w-8 h-8" />, 
      title: "Employee Recognition", 
      description: "Regular recognition programs that celebrate excellence and dedication." 
    },
  ];

  return (
    <>
      <Head>
        <title>Careers at Godway Moving | Moving Jobs in South Florida</title>
        <meta name="description" content="Join South Florida's premier moving team. Explore rewarding career opportunities with Godway Moving, offering competitive benefits and professional growth throughout Miami, Orlando, and Tampa." />
        <meta name="keywords" content="moving jobs Florida, mover careers Miami, Orlando moving jobs, Tampa movers hiring, Florida moving company careers, professional mover positions, moving dispatcher jobs, moving consultant careers, South Florida employment" />
      </Head>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-godway-green1">
          <div className="container-custom relative z-10">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-oswald text-4xl md:text-5xl lg:text-6xl text-white mb-4 uppercase"
              >
                Join Our Moving Team
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 max-w-3xl mx-auto font-oswald"
              >
                Build your career with South Florida's premier moving company
              </motion.p>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-oswald uppercase text-godway-green1">
                Why Join Godway Moving?
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto font-oswald">
                Be part of a team that's helping people start new chapters in their lives
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-xl border border-godway-green1/10 shadow-lg"
                >
                  <div className="w-20 h-20 bg-godway-green1/10 rounded-xl flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-godway-navy mb-4 font-oswald">{benefit.title}</h3>
                  <p className="text-gray-700 font-oswald">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 bg-cream">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-oswald uppercase text-godway-green1">
                Open Positions
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto font-oswald">
                Join our growing team of moving professionals across South Florida
              </p>
            </motion.div>

            <div className="space-y-8">
              {jobPostings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-godway-green1/10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-godway-navy mb-2 font-oswald">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-gray-700 font-oswald">{job.location}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-700 font-oswald">{job.type}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-700 font-oswald">{job.department}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleJobExpand(job.id)}
                      className="mt-4 lg:mt-0 px-6 py-3 bg-godway-green1 text-white rounded-full font-oswald uppercase hover:bg-godway-green2 transition shadow-md inline-flex items-center"
                    >
                      {job.isExpanded ? 'Show Less' : 'View Details'}
                      <svg
                        className={`ml-2 w-5 h-5 transform transition-transform duration-200 ${
                          job.isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-gray-700 mb-6 font-oswald">{job.description}</p>
                  
                  {job.isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-200 pt-6 mt-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-godway-navy mb-4 font-oswald text-lg">Responsibilities:</h4>
                          <ul className="space-y-3">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start">
                                <FaCheck className="text-godway-green1 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 font-oswald">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-godway-navy mb-4 font-oswald text-lg">Requirements:</h4>
                          <ul className="space-y-3">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start">
                                <FaCheck className="text-godway-green1 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 font-oswald">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-8 text-center">
                        <Link href="/contact?position=Career%20Inquiry" className="bg-godway-navy text-white hover:bg-godway-navy/90 px-8 py-4 rounded-full font-oswald uppercase shadow-lg inline-block">
                          Apply for this Position
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-godway-khaki/20">
          <div className="absolute top-0 left-0 w-full h-2 bg-godway-green1/40"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-godway-green1/40"></div>
          <div className="absolute left-10 top-10 w-24 h-24 border-4 border-dashed border-godway-green1/20 rounded-md transform rotate-45"></div>
          <div className="absolute right-10 bottom-10 w-32 h-32 border-4 border-dashed border-godway-green1/20 rounded-md transform -rotate-12"></div>
          
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-8 bg-godway-green1/30 transform rotate-45 translate-x-16 -translate-y-4"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-8 bg-godway-green1/30 transform rotate-45 -translate-x-16 translate-y-4"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-oswald text-3xl md:text-4xl lg:text-5xl text-godway-green1 mb-6 uppercase">
                  Ready to Build Your <span className="text-godway-navy">Career?</span>
                </h2>
                
                <p className="text-gray-700 text-lg mb-10 font-oswald">
                  Join our team and help us provide exceptional moving services throughout South Florida. We're always looking for dedicated professionals to grow with us.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link href="/contact?position=General%20Application" className="bg-godway-green1 text-white hover:bg-godway-green2 px-8 py-4 rounded-full font-oswald text-white uppercase shadow-lg">
                    Apply Today
                  </Link>
                  <Link href="/about" className="bg-godway-navy text-white hover:bg-godway-navy/90 border-2 border-godway-navy px-8 py-4 rounded-full font-oswald uppercase shadow-lg">
                    Learn About Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CareersPage; 