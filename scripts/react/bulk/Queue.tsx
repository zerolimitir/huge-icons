import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgQueue = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.811 5.278a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 7.215.062 7.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.643-.006c-2.004-.004-3.701.007-3.772.024m-11 10.001a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.226.063 18.212.063 18.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-9.143-.006c-5.029-.003-9.201.008-9.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgQueue);
export default ForwardRef;
