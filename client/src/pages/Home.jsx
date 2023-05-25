import {motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from '../config/motion';


const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img src= './threejs.png' alt="logo" className='w-8 h-8 object-contain'/>
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            Customize <br className='x1:block hidden'/> Your T-Shirt!

                        </h1>
                    </motion.div>
                    <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-black text-base'>
                            Create A Unique T-Shirt Design with this 3-D Customizaion Tool. <strong>
                                Unleash your Creativity
                            </strong>{''} and <strong>Build the Perfect Design Suited for you!</strong>

                        </p>

                        <CustomButton
                        type='filled'
                        title='Start Customization'
                        handleClick={() => state.intro = false}
                        customStyles='w-fit px-4 py-2.5 font-bold text-sma' />
                    </motion.div>
                </motion.div>

            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home