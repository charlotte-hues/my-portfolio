import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import NavigationItems from "../../../components/navigation/NavigationItems/NavigationItems";

const StyledMenu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 400;
  background-color: #272727;
  padding: 20% 20%;
`;

const SideMenu = ({ isOpen, close }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={isOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <StyledMenu onClick={() => close()} />
            <NavigationItems close={close} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideMenu;
