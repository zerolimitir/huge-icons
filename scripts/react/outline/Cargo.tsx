import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCargo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.815 1.277a.8.8 0 0 0-.462.354c-.089.143-.094.188-.106 1.069l-.014.92-2.747 1.83c-2.428 1.618-2.764 1.83-2.9 1.83-.229 0-.896.145-1.21.263-1.589.597-2.703 1.914-3.043 3.597-.067.332-.073.635-.073 3.86 0 3.225.006 3.528.073 3.86.397 1.966 1.841 3.41 3.807 3.807.339.069.734.073 6.86.073s6.521-.004 6.86-.073c1.966-.397 3.41-1.841 3.807-3.807.067-.332.073-.635.073-3.86 0-3.225-.006-3.528-.073-3.86-.34-1.683-1.454-3-3.043-3.597-.314-.118-.981-.263-1.21-.263-.136 0-.473-.213-2.903-1.83l-2.749-1.83-.002-.8c-.002-.868-.034-1.092-.18-1.284-.159-.209-.502-.325-.765-.259m1.95 4.793 1.725 1.15-1.745.01c-.96.006-2.53.006-3.49 0L8.51 7.22l1.715-1.147c.943-.631 1.738-1.149 1.765-1.15.028-.002.826.515 1.775 1.147m5.215 2.82c.538.184.878.4 1.304.826.426.426.642.766.826 1.304l.11.32v7.32l-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H5.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32v-7.32l.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.501-.191.28-.186 7.248-.178l6.56.007.32.11M6.815 11.277a.8.8 0 0 0-.462.354l-.093.149v6.44l.093.149c.357.574 1.223.443 1.363-.207.059-.275.06-6.065.001-6.321a.747.747 0 0 0-.902-.564m5 0a.8.8 0 0 0-.462.354l-.093.149v6.44l.093.149c.357.574 1.223.443 1.363-.207.059-.275.06-6.065.001-6.321a.747.747 0 0 0-.902-.564m5 0a.8.8 0 0 0-.462.354l-.093.149v6.44l.093.149c.357.574 1.223.443 1.363-.207.059-.275.06-6.065.001-6.321a.747.747 0 0 0-.902-.564'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCargo);
export default ForwardRef;