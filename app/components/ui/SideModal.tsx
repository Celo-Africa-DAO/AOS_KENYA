import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";
import { DisplayContainerVariants, cn } from "../../utils/utils";
import { ChevronLeft } from "lucide-react";

const SideModal = forwardRef(
  (
    {
      children,
      className,
      onCloseModal,
      title,
    }: {
      children: ReactNode;
      className: string;
      onCloseModal: () => void;
      title: string;
    },
    ref: any
  ) => {
    return (
      <div className="bg-black backdrop-blur bg-opacity-10 fixed z-[100] flex items-center justify-center inset-0">
        <motion.div
          ref={ref}
          variants={DisplayContainerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={cn(
            className,
            "absolute right-0 max-w-full flex flex-col md:w-4/5 h-full overflow-y-auto rounded-l-2xl"
          )}
        >
          <div className="lg:px-10 px-6 flex gap-x-2 lg:gap-x-6 bg-primary text-white py-4 items-center">
            <button onClick={onCloseModal}>
              <ChevronLeft />
            </button>
            <p className="font-medium lg:text-xl max-w-xs">{title}</p>
          </div>
          {children}
        </motion.div>
      </div>
    );
  }
);

export default SideModal;
