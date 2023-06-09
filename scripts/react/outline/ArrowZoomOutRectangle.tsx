import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowZoomOutRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.579 1.279C3.458 1.47 1.763 3.011 1.333 5.14c-.069.339-.073.734-.073 6.86s.004 6.521.073 6.86c.397 1.966 1.841 3.41 3.807 3.807.339.069.734.073 6.86.073s6.521-.004 6.86-.073c1.966-.397 3.41-1.841 3.807-3.807.069-.339.073-.734.073-6.86s-.004-6.521-.073-6.86c-.39-1.929-1.778-3.349-3.703-3.788l-.384-.088-6.34-.007c-3.487-.004-6.484.006-6.661.022M18.98 2.89c.538.184.878.4 1.304.826.426.426.642.766.826 1.304l.11.32v13.32l-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H5.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V5.34l.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.501-.191.28-.186 7.248-.178l6.56.007.32.11m-6.165 4.387c-.485.12-.717.727-.432 1.131.202.285.337.328 1.107.352l.671.02-2.701 2.7-2.7 2.7v-.568c0-.73-.043-.935-.238-1.13-.349-.349-.903-.279-1.169.149l-.093.149v3.453l.12.17a.965.965 0 0 0 .28.253c.153.08.228.085 1.713.096 1.793.014 1.914.001 2.146-.231.399-.399.212-1.098-.33-1.235-.102-.025-.451-.046-.777-.046H9.82l2.7-2.7 2.7-2.701.02.691c.018.633.028.702.113.839.362.583 1.228.441 1.366-.222.031-.15.041-.718.033-1.774-.011-1.485-.016-1.56-.096-1.713a.965.965 0 0 0-.253-.28l-.17-.12-1.646-.007c-.906-.004-1.703.007-1.772.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowZoomOutRectangle);
export default ForwardRef;
