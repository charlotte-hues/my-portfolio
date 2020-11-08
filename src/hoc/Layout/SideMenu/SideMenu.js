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

const SideMenu = props => {
  return (
    <>
      <AnimatePresence>
        {props.isOpen && (
          <motion.div
            key={props.isOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <StyledMenu onClick={() => props.close()} />
            <NavigationItems close={props.close} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideMenu;
