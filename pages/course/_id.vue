<template>
  
    <div  v-if="loading" class="col-md-12">
                        <div style="margin-left:45%;margin-bottom:25%;margin-top:10%">


                            <Loader></Loader>
                        </div>

                    </div>
  <div v-else>
	    <!--// Mini Header \\-->
        <div class="wm-mini-header">
            <span class="wm-blue-transparent"></span>
             <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="wm-mini-title">
                            <h1>Our Courses</h1> 
                        </div>
                        <div class="wm-breadcrumb">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Courses</a></li>
                                <li>Detail</li>
                            </ul>
                        </div>      
                    </div>
                </div>
            </div>    
        </div>
        <!--// Mini Header \\-->

  <!--// Main Content \\-->
		<div class="wm-main-content">

			<!--// Main Section \\-->
			<div class="wm-main-section">
				<div class="container">
					<div class="row">
						<aside class="col-md-3">
							<div class="widget widget_course-price">

								<div class="wm-widget-heading">
									<h4>{{course.name}} </h4>
								</div>
						<a href="#" v-if="enrolled" >You already enrolled this course</a>
							<a href="#" @click="EnrollCourse" v-else >enroll this course</a>
								<!-- <ul>
									<li><a href="#"><i class=" wmicon-social7"></i>234 Students</a></li>
									<li><a href="#"><i class=" wmicon-clock2"></i><time datetime="2017-02-14">Duration: 2hr30mins</time></a></li>
									<li><a href="#"><i class=" wmicon-book2"></i>14 Lectures</a></li>
									<li><a href="#"><i class=" wmicon-location"></i>Campus L2</a></li>
									<li><a href="#">
										<div class="wm-levelrating">
											<span class="rating-box" style="width:70%"></span>
										</div>
										Intermediate</a></li>
									<li><a href="#"><i class=" wmicon-technology"></i>English Language</a></li>
								</ul> -->
							</div>
							
							
						
							<!-- <div class="widget widget_professor-info">
								<div class="wm-widget-title">
									<h2>About Professor</h2>
								</div>
								<figure>
									<a href="#"><img src="../../static/extra-images/our-courses-author.jpg" alt=""></a>
								</figure>
								<div class="wm-Professor-info">
									<h6><a href="#">Shelly T. Forrester</a></h6>
									<span>15 yrs. experience</span>
								</div>
								<p>Shelly T. accompanied Dr. Stephen Harnish to SC12, an international supercomputing conference in Salt Lake City, Utah. At the conference.</p>
								<a class="wm-read-more" href="#">Read More</a>
							</div>
						
							 -->
							
						</aside>
						<div class="col-md-9">
							<div class="wm-blog-single wm-courses">
								<figure class="wm-detail-thumb">
									<img :src="course.thumbnail" alt="" style="max-height:300px;width:850px">
								</figure>
								<div class="wm-blog-author wm-ourcourses">
									<div class="wm-blogauthor-left">
										<img src="../../static/extra-images/papular-courses-thumb-1.jpg" alt="">
										<!-- <a class="wm-authorpost" href="#">Shelly T. Forrester</a> -->
									</div>
									<div class="wm-our-courses">
										<ul>
											<li>
												<a href="#"><i class="wmicon-tool2"></i>created {{course.created_date |date }}</a>
											</li>
											<li>
												<a href="#"><i class="wmicon-diploma"></i>last updated {{course.updated_date |date}}</a>
											</li>
											<li>
												<a href="#"><i class="wmicon-symbol"></i>Assesments: Yes</a>
											</li>
										</ul>
									</div>
								</div>								
							</div>
							
							<div class="wm-our-course-detail">
								<div class="wm-title-full">
									<h2>{{course.name}}</h2>
								</div>
								<p class="wm-text">{{course.description}}</p>
								
							</div>



                            <div class="wm-title-full" style="margin-top:50px">
                                <h2>All Weeks of The Course</h2>
                            </div>
                            <div class="wm-courses wm-courses-popular">
                              <ul v-if="!enroled" > You are Not Allowed to see it is Not Activated For You!</ul>
                                <ul v-else class="row">
                                 <nuxt-link v-for="week in thisCourseWeeks" :key="week.id"  :to="enrolled ? `/course/${course_id}/${week.id}` : ''"> 
                                    <li  class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img :src="week.thumbnail" alt="">
											 <span class="wm-popular-hover">
												 
												 <small v-if="enrolled">select Week</small> 
												 <small v-else>Enroll  First</small> 
											 
											 </span> </a>
                                                <figcaption>
                                                    <img src="../../static/extra-images/papular-courses-thumb-1.jpg" alt="">
                                                    <!-- <h6><a href="#">Shelly T. Forrester</a></h6> -->
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">{{week.name}}</a></h6>
                                                <div class="wm-courses-price">  updated {{week.updated_date |date}} </div>
                                                <!-- <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 342</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 10</a></li>
                                                </ul> -->
                                            </div>
                                        </div>
                                    </li>
                               </nuxt-link>

						
						
                                </ul>
                            </div>						
						</div>
					</div>
				</div>
			</div>
			<!--// Main Section \\-->

            <!--// Main Section \\-->
		</div>
		<!--// Main Content \\-->
		<!--   main  body-->

  </div>

</template>

<script>
import axios from "axios";

export default {
  middleware: ["check-auth", "auth"],
  layout: "MainLayout",

  head() {
    return {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "../css/bootstrap.css" },
        { rel: "stylesheet", href: "../css/font-awesome.css" },
        { rel: "stylesheet", href: "../css/flaticon.css" },
        { rel: "stylesheet", href: "../css/slick-slider.css" },
        { rel: "stylesheet", href: "../css/prettyphoto.css" },
        { rel: "stylesheet", href: "../style.css" },
        { rel: "stylesheet", href: "../css/color.css" },
        { rel: "stylesheet", href: "../css/color-two.css" },
        { rel: "stylesheet", href: "../css/color-three.css" },
        { rel: "stylesheet", href: "../css/color-four.css" },
        { rel: "stylesheet", href: "../css/responsive.css" },
        { rel: "stylesheet", href: "../build/mediaelementplayer.css" },
      ],

      script: [
        { src: "../script/jquery.js" },
        { src: "../script/modernizr.js" },
        { src: "../script/bootstrap.min.js" },
        { src: "../script/jquery.prettyphoto.js" },
        { src: "../script/jquery.countdown.min.js" },
        { src: "../script/fitvideo.js" },
        { src: "../script/skills.js" },
        { src: "../script/slick.slider.min.js" },
        { src: "../script/waypoints-min.js" },
        { src: "../build/mediaelement-and-player.min.js" },
        { src: "../script/isotope.min.js" },
        { src: "../script/jquery.nicescroll.min.js" },
        { src: "../https://maps.googleapis.com/maps/api/js" },
        { src: "../script/functions.js" },
      ],
    };
  },

  data() {
    return {
      loading: true,
      course: [],
      weeks: [],
      course_id: this.$route.params.id,
      enrolment: [],
      enroled:null
    };
  },
  methods: {
   
    EnrollCourse() {
      const url = process.env.baseUrl + "/enroll/";

      const data = {
        student: this.$store.state.user_id,
        course: this.course_id,
      };

      axios
        .post(url, data)
        .then((response) => {
          console.log(response.data);
          this.enrolment = [];
          this.getEnrolment();

          
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getEnrolment() {
      const url = process.env.baseUrl + "/enroll/";

      axios
        .get(url)
        .then((response) => {
          this.enrolment = response.data.filter(
            (enrolment) =>
              enrolment.student == this.$store.state.user_id &&
              enrolment.course == this.course_id
          );
          this.enroled = this.enrolment[0].is_active
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getCourse() {
      const url =
        process.env.baseUrl + "/course/" + this.$route.params.id + "/";

      axios
        .get(url)
        .then((response) => {
          this.course = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    setCourse() {
      this.$store.commit("setCourse", this.course);
    },

    getWeeks() {
      const url = process.env.baseUrl + "/week/";

      axios
        .get(url)
        .then((response) => {
          this.weeks = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  computed: {

    enrol(){

      return this.enrolment[0]
    },
    thisCourseWeeks() {
      return this.weeks.filter((week) => week.course == this.$route.params.id);
    },

    enrolled() {
      return this.enrolment.length > 0 && this.enrolment ? true : false;
    },
  },

  mounted() {
    this.setCourse();
    this.getCourse();
    this.getWeeks();
    this.getEnrolment();
  },
};
</script>

