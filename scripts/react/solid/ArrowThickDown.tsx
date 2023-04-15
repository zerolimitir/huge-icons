import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowThickDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.664 3.063a1.005 1.005 0 0 0-.533.448L9.02 3.7l-.011 4.65-.01 4.65h-.942c-.53 0-1.015.019-1.109.042a1 1 0 0 0-.691 1.269c.057.17.444.632 2.581 3.075 1.829 2.091 2.562 2.902 2.688 2.975.25.142.698.142.947 0 .126-.072.858-.882 2.676-2.96 1.377-1.574 2.53-2.924 2.562-3.001a1.014 1.014 0 0 0-.493-1.302c-.142-.07-.26-.079-1.188-.09L15 12.995v-4.57c0-5.139.019-4.808-.299-5.126-.303-.303-.271-.299-2.718-.296-1.773.002-2.191.013-2.319.06'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowThickDown);
export default ForwardRef;
