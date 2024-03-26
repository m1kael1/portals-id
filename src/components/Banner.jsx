import { portals } from "./ListPortal";
import { fadeInFromBottom, fadeInFromLeft } from "../libs/variants";
import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Motion } from "./motion/Motion";

const Banner = ({ hash }) => {
	return (
		<div className="flex flex-col lg:flex-row justify-center w-full h-screen items-center relative px-3 py-2 gap-2 lg:gap-0">
			<a
				href={`#${hash}`}
				className="z-[55] absolute bottom-11 animate-bounce text-white lg:text-red-600 text-3xl "
			>
				<AiOutlineArrowDown size={50} />
			</a>

			<motion.div
				variants={fadeInFromLeft}
				initial="initial"
				animate="animate"
				custom={2}
				className="w-full max-w-[500px] h-[500px] bg-slate-400 z-50 rounded-tr-[10%] rounded-bl-[10%] overflow-hidden shadow-2xl "
			>
				<div>
					<iframe
						width={500}
						height={500}
						allowFullScreen={true}
						src="https://lottie.host/embed/0748b898-a4f2-4b43-bd69-37cdcc88361f/86Eo08PhUq.json"
					></iframe>
				</div>
			</motion.div>
			<ul className="flex lg:justify-end max-w-[480px] flex-wrap gap-x-3 items-center justify-start z-50 sm:gap-2">
				{portals.map((portal, index) => {
					const portalLogoUrl =
						portal === "cnn"
							? "//upload.wikimedia.org/wikipedia/commons/thumb/9/91/CNN_Indonesia_logo.svg/300px-CNN_Indonesia_logo.svg.png"
							: portal === "antara"
							? "https://asset.brandfetch.io/idmQ4nxuiX/idVa-pC7FU.jpeg?updated=1692882362133"
							: portal === "cnbc"
							? "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/b9/e6/eb/b9e6ebdc-6eee-a081-f984-b00bd9f34863/AppIcon-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp"
							: portal === "sindonews"
							? "https://play-lh.googleusercontent.com/LSgpGO8zgGhnCxTTqJt-LDkOLN97Qc4JPsOZUbnnOjaMY9bP1M3_a3jmW9yt8M00EcM=w240-h480-rw"
							: portal === "okezone"
							? "https://play-lh.googleusercontent.com/R_GVBSv9f06SmakbDsgi40QI7hJgK1WXgYToAHhTCYP91HAZiXFhpWS1Rog-gjUBGnw=w240-h480-rw"
							: null;
					return (
						<Motion key={index} variants={fadeInFromBottom} custom={index}>
							<div
								className={` text-5xl lg:text-6xl font-laviossa text-slate-300 font-semibold opacity-80  capitalize 
								hover:text-6xl lg:hover:text-7xl  cursor-pointer hover:font-bold hover:text-white relative group hover:opacity-100 transition-all`}
								key={index}
							>
								{portal}
								<img
									className="bg-blue-400 shadow-2xl absolute left-[30%] -top-[110px] group-hover:opacity-100 group-hover:visible  opacity-0 invisible transition-all rounded-3xl"
									width={120}
									height={120}
									src={portalLogoUrl}
									alt=""
								/>
							</div>
						</Motion>
					);
				})}
			</ul>
			<motion.span
				variants={fadeInFromLeft}
				initial="initial"
				animate="animate"
				className="w-full h-[50vh] bg-red-600 absolute z-10 lg:bottom-[25%] bottom-0 "
			></motion.span>
		</div>
	);
};

export default Banner;
