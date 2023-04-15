import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowThickLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.71 6.255c-.082.03-.199.088-.26.127-.06.04-1.37 1.174-2.911 2.522-2.029 1.775-2.828 2.498-2.9 2.623-.142.249-.142.698 0 .947.073.126.884.859 2.975 2.688 3.126 2.734 3.041 2.67 3.469 2.629.395-.038.776-.344.875-.702.023-.084.042-.574.042-1.119V15h4.573c5.141 0 4.81.019 5.128-.299.302-.302.299-.274.299-2.701s.003-2.399-.299-2.701c-.318-.318.013-.299-5.128-.299H11v-.973c0-1.105-.028-1.255-.277-1.504-.273-.273-.699-.386-1.013-.268'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowThickLeft);
export default ForwardRef;
