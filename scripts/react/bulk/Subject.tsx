import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSubject = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.811 5.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 12.213.063 12.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-6.143-.006c-3.379-.004-6.201.008-6.272.025m-.004 8.008a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.291.062 12.033.062 12.324 0 .758-.163.758-1.269 0-1.432-.267-.057-12.098-.054-12.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSubject);
export default ForwardRef;
