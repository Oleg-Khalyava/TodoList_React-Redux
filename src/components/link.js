/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={active}
    >
      {children}
    </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
