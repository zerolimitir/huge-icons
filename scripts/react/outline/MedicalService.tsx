import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMedicalService = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M10.74 1.265c-1.329.132-2.397.81-2.998 1.903-.3.546-.431 1.006-.482 1.696l-.028.364-.906.025c-.981.027-1.426.093-1.95.29-1.589.597-2.703 1.914-3.043 3.597-.068.335-.073.668-.073 4.86s.005 4.525.073 4.86c.397 1.966 1.841 3.41 3.807 3.807.339.069.734.073 6.86.073s6.521-.004 6.86-.073c1.966-.397 3.41-1.841 3.807-3.807.068-.335.073-.668.073-4.86s-.005-4.525-.073-4.86c-.34-1.683-1.454-3-3.043-3.597-.524-.197-.969-.263-1.95-.29l-.906-.025-.028-.364c-.106-1.424-.783-2.516-1.947-3.141-.751-.404-1.001-.448-2.593-.463a37.144 37.144 0 0 0-1.46.005m2.838 1.556c.371.097.696.291 1.003.598.447.446.659.939.659 1.529v.292H8.76v-.292c0-.59.212-1.083.659-1.529.3-.301.631-.5.985-.596.323-.087 2.842-.088 3.174-.002M18.98 6.89c.538.184.878.4 1.304.826.426.426.642.766.826 1.304l.11.32v9.32l-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H5.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V9.34l.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.501-.191.28-.186 7.248-.178l6.56.007.32.11m-7.165 3.387a.8.8 0 0 0-.462.354c-.091.146-.093.173-.106 1.376l-.012 1.228-1.231.012-1.23.013-.162.107a.7.7 0 0 0-.345.64c0 .196.019.263.116.401.227.321.273.33 1.644.345l1.208.012.012 1.228c.013 1.203.015 1.23.106 1.376.357.574 1.223.443 1.363-.207.026-.122.044-.653.044-1.304V14.76h1.098c1.286 0 1.445-.023 1.662-.24.398-.398.21-1.097-.331-1.234-.118-.029-.589-.046-1.307-.046H12.76l-.001-1.11c-.001-1.176-.025-1.392-.179-1.594-.159-.209-.502-.325-.765-.259'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMedicalService);
export default ForwardRef;