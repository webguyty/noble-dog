import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HeaderHero from '../components/layout/HeaderHero';
import DividerIcon from '../components/layout/DividerIcon';
import { FaDog } from 'react-icons/fa';
import BtnFancyText from '../components/buttons/BtnFancyText';

import testimonials from '../tnd/testimonials';
import TestimonialSingle from '../components/testimonials/TestimonialSingle';

const SecondPage = () => (
  <Layout>
    <main>
      <SEO title='Training information for The Noble Dog Training And Behavior Modification' />
      <header className='trainingInfo__header'>
        <HeaderHero
          headline="Don't Let Your Dog's Behavior Problems Affect Your Life, 
				or Your Relationship With Your Pet Another Day!
				"
        />
      </header>
      <div className='trainingInfo__dividerIcon'>
        <DividerIcon destination='#donotblame' />
      </div>
      <div className='trainingInfo__background'>
        <div className='trainingInfo__wrapper trainingInfo'>
          <div className='trainingInfo__introBlock'>
            <div className='trainingInfo__introBlock--text'>
              <h2 className='trainingInfo__mainHeading' id='donotblame'>
                Don't blame yourself or your dog!
              </h2>
              <h3 className='trainingInfo__secondaryHeading'>
                Behavior issues are VERY common. <br />
                <br />
                They are often a result of conditioning, genetics, and several
                other factors.
              </h3>

              <h3 className='text-center py-5'>
                The good news is: that regardless of the dog's age or past, they
                CAN be overcome!
              </h3>
              <p>
                In every dog, there's one that's loving and able to behave well
                in any setting. My goal with “The Noble Dog” is to help bring
                out that part of the dog's personality, and let it dominate.
                There is simply no need to put up with, or otherwise tolerate,
                poor/unwanted behavior from your dog.
              </p>
            </div>
          </div>
          <div className='trainingInfo__questionBlock'>
            <div className='trainingInfo__questionBlock--border'>
              <p>Do you feel like your dog runs the house?</p>
              <p>
                Do you often feel like your dog is “in control” instead of you?
              </p>
              <p>
                It's time to take back control{' '}
                <span className='trainingInfo__questionBlock--now'>NOW</span>
              </p>
            </div>
          </div>
          <div className='trainingInfo__textBlock'>
            <p>
              I specialize in teaching both you as well as your dog how to
              coexist, with the proper order and hierarchy. An important (and
              often-missed) part of training is involvement,{' '}
              <strong>and yes, training the owner.</strong>
            </p>
            <p>
              Through my proven methods, I'll teach you how to be an effective,
              loving leader for your dog.
            </p>
          </div>

          {/* <div className='mt-2 mb-5'> */}
          {/* <TestimonialSingle testimonials={testimonials} name='Inge C' /> */}
          {/* </div> */}

          <div className='trainingInfo__tableOfContents'>
            <h3 className='heading-tertiary'>Table Of Contents</h3>

            <div className='trainingInfo__tableOfContents__grid'>
              <div className='trainingInfo__tableOfContents__grid--1'>
                <ul>
                  <h4>Training methods:</h4>
                  <li>
                    <FaDog />
                    <a href='#behaviorProblems'> Common behavior problems</a>
                  </li>
                  <li>
                    <FaDog />{' '}
                    <a href='#trainingMethods'> Training methods I use</a>
                  </li>
                  <li>
                    <FaDog /> <a href='#trainingSuccess'>Keys to success</a>
                  </li>
                  <li>
                    <FaDog />{' '}
                    <a href='#trainingExample'>An example of training</a>
                  </li>
                  <li>
                    <FaDog /> <a href='#trainingTools'>Tools for training</a>
                  </li>
                  <li>
                    <FaDog />{' '}
                    <a href='#trainingExpectations'>What can you expect</a>
                  </li>
                  <li>
                    <FaDog />{' '}
                    <a href='#trainingLength'>
                      How long will it take to get results
                    </a>
                  </li>
                  <li>
                    <FaDog />{' '}
                    <a href='#trainingExpectations'>What can you expect</a>
                  </li>
                  <li>
                    <FaDog />{' '}
                    <a href='#trainingOwner'>Do you really train the owner?</a>
                  </li>
                  <li>
                    <FaDog />{' '}
                    <a href='#trainingBestRates'>
                      Best training in Ventura County
                    </a>
                  </li>
                </ul>
              </div>
              <div className='trainingInfo__tableOfContents__grid--2'>
                <ul>
                  <h4>Training prices, service area, and hours:</h4>

                  <li>
                    <FaDog />{' '}
                    <a href='#trainingLocation'>Service area and hours</a>
                  </li>
                  <li>
                    <FaDog /> <a href='#trainingPrices'>Prices</a>
                  </li>
                  <li>
                    <FaDog />{' '}
                    <a href='#trainingCancellation'>
                      Session cancellation policy
                    </a>
                  </li>
                  <li>
                    <FaDog /> <a href='#trainingStart'>Get started</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End of grid */}
          </div>
          <div className='trainingInfo__textBlock'>
            <p>
              In no time at all, we will have your dog treating you and your
              home with respect and proper behavior. It's a matter of{' '}
              <strong>
                patience, conditioning, and a positive training environment.
              </strong>
            </p>
          </div>
          <div className='trainingInfo__behaviorProblems'>
            <div className='trainingInfo__behaviorProblems--border'>
              <h3 id='behaviorProblems'>
                Here are the more common problems that most dog owners
                experience with their pets:
              </h3>
              <ul className='trainingInfo--listGrid'>
                <div>
                  <li>Defiance</li>
                  <li>Aggression (various forms)</li>
                  <li>Walking properly</li>
                  <li>Dominance</li>
                  <li>Destructive behavior</li>
                  <li>Running away</li>
                  <li>Chewing</li>
                  <li>Shyness</li>
                </div>
                <div>
                  <li>Jumping on people and furniture</li>
                  <li>Stealing food</li>
                  <li>“Bogarting” items</li>
                  <li>Separation anxiety</li>
                  <li>Excessive barking</li>
                  <li>Urinating indoors</li>
                  <li>Excessive digging</li>
                </div>
              </ul>
            </div>
          </div>
          {/* End of behavior problems */}
          <div className='trainingInfo__textBlock'>
            <p>
              Whether your dog's particular issue shows up on this list or not,
              I can help! Beyond that, I'll ensure that you end up with a dog
              who will also obey simple commands too!
            </p>
            <p>
              While I specialize in discipline and behavior issues rather than
              “obedience” training, I can work with your pet to obey any set of
              commands you desire. All it takes is time and patience.
            </p>
          </div>
          <div className='trainingInfo__getStarted'>
            <div className='trainingInfo__getStarted--grid'>
              <p>Would you like get started? </p>
              <BtnFancyText
                title='Tell us about your dog'
                to='contactUs'
                color='gold'
                size='medium'
              />
            </div>
          </div>

          <div className='trainingInfo__methods'>
            <h3 id='trainingMethods'>So What Training Methods Do I Use?</h3>
            <p>
              I believe in utilizing training methods that are positive, simple
              and effective. They must be able to apply to different aspects of
              a dog and owner's relationship. We set out to achieve a goal. That
              goal is to establish you, the owner as a good, respected leader
              for your dog. It's important to establish that the dog will
              respect you as its leader in the correct manner.
            </p>
            <p>
              This in turn motivates the dog to naturally want to obey commands,
              as well as make an effort to please his leader, you.
            </p>
            <p>
              Remember, dogs are naturally “pack animals”. It's in their DNA.
              One dog becomes the effective leader, and all the other members of
              the pack follow and obey the leader. The ultimate goal is to
              establish you as an effective and respected “leader” for your dog.
              As a result, he will naturally want to listen to you, as well as
              try his hardest to please you.
            </p>
            <p>
              Believe it or not, a huge part of what I do is train the human
              side of the dog-owner equation to become truly effective leaders.
            </p>
            <p>
              All of the sessions are “hands-on”. We will also discuss the
              theory of dog behavior in detail along the way. I will work with
              you as well as your dog in order to establish proper technique and
              communication. Every dog is different, so we'll also take the time
              to learn about your dog's own psychology and behavior patterns.
            </p>
          </div>

          {/* <div className='mt-2 mb-5'>
            <TestimonialSingle testimonials={testimonials} name='Anthony G' />
          </div> */}

          <div className='trainingInfo__methods'>
            <h3 id='trainingSuccess'>
              Remember that accomplishing this successfully, takes time and
              commitment.
            </h3>
            <h4>
              <u>
                <strong>
                  Here are the more common problems that most dog owners
                  experience with their pets:
                </strong>
              </u>
            </h4>
            <ul>
              <li>The importance of fulfilling your dog's needs</li>
              <li>Proper walking and discipline procedures</li>
              <li>
                Effectively setting rules of the household for your dog to abide
                by, with no tolerance of bad behavior
              </li>
              <li>And much more!</li>
            </ul>
            <p>
              I find using a balanced approach to be the best way to set the
              foundation. This means using both positive reinforcement, as well
              as proper correction techniques. In my experience, this approach
              is the fastest and most effective way to stop bad behavior. It's
              also the best way to influence new and proper behavior in the
              future.{' '}
            </p>
            <p>
              One of the more established ways of using positive reinforcement
              that most trainers use is by giving treats. I for one, do NOT do
              this. Instead, I prefer to use positive reinforcement in regards
              to what the dog wants. And believe it or not, that is very rarely
              treats. Your dog wants your love and attention more than treats.{' '}
            </p>
          </div>

          <div className='trainingInfo__methods'>
            <h3 id='trainingExample'>Here's an example</h3>
            <p>
              I will often ask a dog I work with to sit and stay before exiting
              the house. If the dog successfully obeys, he will be positively
              rewarded by being taken outside for a walk. The dog is able to
              make the connection between obeying and direct positive rewards in
              a very logical way. This approach allows you as an owner to
              essentially train and adjust your dog's behavior through the
              course of a day. Without the use of repetitive, non-changing
              rewards, such as treats.{' '}
            </p>
            <p>
              When I use a correction action, the goal is to simply snap the dog
              out of its current mindset. A correction can be anything from a
              specific noise (as in saying "no"), or a calm-but-assertive touch.
              The point of doing this is to let the dog know that he needs to be
              focusing on what I want him to be focusing on at that particular
              time.{' '}
            </p>
            <p>
              I do not believe it's ever proper to use a correction to hit or
              hurt a dog, or cause any kind of discomfort even remotely. It's
              important as a trainer to remain calm with the dog he's working
              with. This encourages the dog to trust and remain calm right back
              with the trainer (as well as with you!).{' '}
            </p>
            <p>
              Remember, I handle every dog with the same degree of love and
              attention I do with my very own. As ANY good trainer should.
            </p>
          </div>

          <div className='trainingInfo__methods'>
            <h3 id='trainingTools'>What tools do I use?</h3>
            <p>
              To me, the most powerful tool, at the risk of sounding cliché', is
              the mind. When you learn the proper way to ask your dog to obey a
              command, you will learn more than just that. You will also learn
              the proper voice tone and body language to use.
            </p>
            <p>
              These elements go a long way in establishing the leadership role.
              It clearly communicates to the dog that YOU are the leader and
              shall be obeyed. Better yet, it will make the dog WANT to obey
              you. This is half the battle.
            </p>
            <p>
              As for “physical” tools, we will use whatever you as the owner are
              comfortable with. My standard tool is a slip lead. Nothing fancy
              or elaborate, but it works virtually every time. When we do the
              initial evaluation, we can discuss other tools. Including any you
              may be currently using with your dog, or have used in the past.
            </p>
          </div>

          <div className='trainingInfo__methods'>
            <h3 className='pb-3' id='trainingExpectations'>
              What can you expect?
            </h3>
            <h4 className='pb-2'>
              <strong>
                <u>
                  As a result of my working with your dog, you can expect some
                  very clear, distinct results:
                </u>
              </strong>
            </h4>
            <ol>
              <li>
                Your dog will have excellent behavior skills, and will listen to
                your standard commands.
              </li>
              <li>
                Your dog will keep his or her personality, and the quirky
                characteristics you have come to love.
              </li>
              <li>
                Your dog will live within the rules you have established, and
                will be happy to do it.
              </li>
            </ol>
          </div>
          <div className='trainingInfo__methods'>
            <h3 id='trainingLength'>How long will it take?</h3>
            <p>
              This depends greatly on a few factors. It also depends on what
              you're willing to commit on a personal level towards the training
              and rehabilitation of your dog. It's important to understand that
              effective training, behavior modification, and rehabilitation all
              take time. Also, just as importantly, it requires consistency on
              your behalf.
            </p>
            <p>
              When you hire me to work with your dog, be assured that you will
              get 100% commitment from me towards you and your dog. All I ask is
              that you do the same. If you do, chances are very good that you
              will start seeing small changes almost immediately. Those changes
              will build on top of the previous changes with every day and every
              session.
            </p>
            <p>
              Commit to the process, and you will be amazed not only at the
              results, but how fast they will come along. Don't worry, I will
              commit to the process too. I will take on any case no matter how
              hopeless it may appear!
            </p>
            <p>
              As first a dog walker, then a trainer, I have dealt with dogs of
              all kinds of temperaments and dispositions. I even worked with a
              dog that was so aggressive towards humans, that he charged me the
              first time we made eye contact.
            </p>
            <p>
              Within one week, he became completely calm-submissive, and safe to
              keep around. With only one hour's session, and giving the owner
              the proper procedures to manage the dog, they saw results in a
              WEEK.
            </p>
            <p>
              This was not just because of my work, but it was the owner's
              commitment that made all the difference. It's proof that with
              proper information, practice and consistency, any dog owner can
              achieve great results with ANY dog.
            </p>
          </div>

          <div className='trainingInfo__methods'>
            <h3 id='trainingOwner'>What will I have to do as the owner?</h3>
            <p>
              Remember, when you hire me, my job will be to train YOU as well as
              your dog. This process is easier than you think. It doesn't
              require hard work nearly as much as it requires consistency, and
              commitment. After each session, I will give you the homework for
              the week. For best and fastest results, commit to one hour a day
              to work with your dog to apply your homework.
            </p>
            <p>
              And no, “working” with your dog does not include petting your dog,
              or being in the same room with him. Just follow the simple steps I
              give you, do the homework, and you will see results in no time at
              all!
            </p>
          </div>

          <div className='trainingInfo__methods'>
            <h3 id='trainingBestRates'>
              Get Quality, Professional Training, At The Best Rates in Ventura
              County!
            </h3>
            <p>
              My specially-designed training packages give you the best value in
              the marketplace. Based on your needs, and your dog's own unique
              situation, we'll determine which package is best for you.
            </p>
            <p>
              We will then customize the right package to fit your needs, as
              well as your dog's. Each session is held in your home, and usually
              lasts about an hour. All sessions are “hands-on” and dedicated to
              developing the proper behavior skills between you and your dog.
            </p>
            <p>
              To best determine the package that's right for you, take advantage
              of an initial training session and consultation!
            </p>
          </div>
          {/* <h4>
            To request a FREE evaluation training session, please click NOW!
            *insert link to inquiry form here*
          </h4> */}

          <div className='trainingInfo__methods'>
            <h3 id='trainingLocation'>Service area and hours</h3>
            <p>
              We offer personal training sessions at your home, local park, and
              other public locations around Ventura, Oxnard, and Camarillo. I
              suggest getting started in your home as that is where you spend
              the most of your time with your dog and where many behaviors
              originate from. Going forward I'm happy to meet you and your dog
              at your home and other public locations depending on what we are
              working on.
            </p>
            <h4>
              <u>Ventura and Oxnard</u>
            </h4>
            <p>
              Wednesday, Thursday, and Friday from 4pm to 8pm
              <br />
              Saturday and Sunday from 10AM to 7PM
            </p>
            <h4>
              <u>Camarillo</u>
            </h4>
            <p>Saturday and Sunday from 10AM to 7PM</p>
          </div>

          <div className='trainingInfo__packages'>
            <h3 id='trainingPrices'>Training Packages</h3>
            <p className='trainingInfo__packages__introP'>
              We can help suggest which training package may be best for your
              situation and goals.
              <br />
              <strong>See below</strong> on how to schedule and introduction
              training session.
            </p>
            <div className='trainingInfo__packages__grid'>
              <div className='trainingInfo__package trainingInfo__package--basic'>
                <div className='trainingInfo__package__title'>
                  <h4>Basic training package</h4>
                </div>
                <div className='trainingInfo__package__cardBody'>
                  <div className='trainingInfo__package__sessions'>
                    <p>3 personal training sessions</p>
                  </div>
                  <div className='trainingInfo__package__description'>
                    <p>
                      Get started on the right foot with training. Do you have a
                      new dog or puppy you have added to your family? Get a
                      great handle on your dog's behavior and eliminate any
                      behavior problems from developing.
                    </p>
                  </div>
                  <div className='trainingInfo__package__price'>
                    <p>$325</p>
                  </div>
                  <div className='trainingInfo__package__list'>
                    <ul>
                      <li>Loose leash walking</li>
                      <li>Build social skills</li>
                      <li>Be a leader</li>
                      <li>
                        Basic Commands <br />
                        (sit, stay, heel, lie down)
                      </li>
                      <li>
                        Basic good behavior <br />
                        (not jumping, potty training, etc.)
                      </li>
                      <li>
                        Intro to recall
                        <br />
                        (coming when called)
                      </li>
                      <li>Calm anxiousness</li>
                      <li>Invitation to meet-ups</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='trainingInfo__package trainingInfo__package--noble'>
                <div className='trainingInfo__package__title'>
                  <h4>Noble Dog Package</h4>
                </div>
                <div className='trainingInfo__package__cardBody'>
                  <div className='trainingInfo__package__sessions'>
                    <p>6 personal training sessions</p>
                  </div>
                  <div className='trainingInfo__package__description'>
                    <p>
                      Is your dog a handful? Be a great leader for your dog and
                      feel comfortable taking your dog out in public situations.
                      Improve your dogs social skills towards other dogs and
                      people if they have aggression or anxiety issues.
                    </p>
                  </div>
                  <div className='trainingInfo__package__price'>
                    <p>$525</p>
                  </div>
                  <div className='trainingInfo__package__list'>
                    <ul>
                      <li>Includes all from Basic Training</li>
                      <li>Improve aggression issues</li>
                      <li>Extensive socialization</li>
                      <li>Anxiety issues</li>
                      <li>Reliable recall</li>
                      <li>Dominance</li>
                      <li>Greatly calm anxious dogs</li>
                      <li>
                        Includes multiple dogs
                        <br />
                        (If applicable in family)
                      </li>
                      <li>Invitation to meet-ups</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='trainingInfo__package trainingInfo__package--advanced'>
                <div className='trainingInfo__package__title'>
                  <h4>Advanced training package</h4>
                </div>
                <div className='trainingInfo__package__cardBody'>
                  <div className='trainingInfo__package__sessions'>
                    <p>9 personal training sessions</p>
                  </div>
                  <div className='trainingInfo__package__description'>
                    <p>
                      Dive deep into learning about your dog's behavior. If your
                      dog has intense behavior issues or you're looking to
                      incorporate your dog in all facets of life both on and of
                      leash this could be the package for you.
                    </p>
                  </div>
                  <div className='trainingInfo__package__price'>
                    <p>$725</p>
                  </div>
                  <div className='trainingInfo__package__list'>
                    <ul>
                      <li>Includes all from Noble Dog</li>
                      <li>
                        Custom training
                        <br />
                        (Achieve your behavior goals)
                      </li>
                      <li>Hard to manage dogs</li>
                      <li>Training in many environments</li>
                      <li>Long term success</li>
                      <li>
                        Includes multiple dogs
                        <br />
                        (If applicable in family)
                      </li>
                      <li>Continuous support</li>
                      <li>Invitation to meet-ups</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End of card */}
          </div>
          {/* End of packages */}

          <div className='trainingInfo__methods'>
            <h3 id='trainingStart'>
              Get started with training and behavior modification today
            </h3>
            <p>
              The way I get started with people is by scheduling an initial
              training session. The first training session generally runs an
              hour long where we can get started working with your dog. We can
              talk about your dog's behavior and take them for a walk together
              around your neighborhood. After working with you and your dog and
              based on their behavior I'll have a good idea on what we can get
              accomplished in our training packages. I ask{' '}
              <strong>$100 for the first training session </strong>
              that I'm happy to apply towards any training session moving
              forward.
            </p>
            <h4>Get started today</h4>
            <p>
              Please send us an email{' '}
              <a href='mailto:thenobledog@gmail.com' target='_top'>
                {' '}
                <strong>thenobledog@gmail.com</strong>
              </a>
              <br />
              Tell us a little bit about your dogs behavior and your training
              goals. If you can let us know what town you live in that helps
              with scheduling. We will contact you shortly to help answer any
              questions and set up our first training session.
            </p>
            <p>
              Give us a call <strong>(805) 222-6726</strong>
              <br /> Please leave a message as I'm frequently in training
              sessions.
            </p>
            <p>
              Need help? Have questions?
              <br />
              Feel free to contact me!
            </p>
            <Link to='/'>Go back to the homepage</Link>
          </div>

          <div className='trainingInfo__methods'>
            <h3 id='trainingCancellation'>
              Training Session cancellation policy
            </h3>
            <p>
              We are happy to reschedule training sessions to a different day or
              time if needed for any reason. However to provide the best service
              to our clients we do have charges if cancellations are made with
              less than 24 hours notice.
            </p>
            <h4>Less than 24 hours notice cancellation</h4>
            <p>$30 charge</p>
            <h4>Less than 3 hours notice cancellation</h4>
            <p>Loss of training session</p>
          </div>
          {/* End of training info */}
        </div>
      </div>
    </main>
  </Layout>
);

export default SecondPage;
