import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBriefcaseTriangular = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.397 6.04C3.8 6.314 2.571 7.417 2.135 8.968c-.094.332-.107.463-.124 1.212l-.019.84.814.487c1.93 1.154 3.716 2.039 5.334 2.643.622.232 1.691.57 1.804.57.043 0 .056.069.056.293 0 .523.187.976.567 1.371.389.405.88.616 1.433.616a1.91 1.91 0 0 0 1.384-.567c.399-.383.616-.88.616-1.411v-.284l.29-.075c1.797-.461 4.353-1.63 6.9-3.154l.81-.484v-.696c0-.791-.079-1.291-.285-1.809-.459-1.152-1.436-2.024-2.677-2.388l-.378-.111-6.54-.006c-3.597-.004-6.622.008-6.723.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseTriangular);
export default ForwardRef;
