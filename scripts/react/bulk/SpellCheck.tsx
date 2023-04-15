import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpellCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.807 3.279a.896.896 0 0 0-.28.15c-.137.11-.314.518-2.701 6.234-2.743 6.573-2.654 6.334-2.495 6.638a.89.89 0 0 0 .402.376c.279.106.704-.008.863-.231.042-.059.41-.908.818-1.887l.741-1.779h5.69l.741 1.779c.408.979.776 1.828.818 1.887.101.141.382.274.579.273a.883.883 0 0 0 .573-.253c.12-.13.2-.433.163-.622-.036-.187-5.023-12.149-5.124-12.29-.16-.226-.502-.345-.788-.275m1.301 5.331 1.087 2.61-1.098.011c-.603.005-1.591.005-2.194 0l-1.098-.011 1.087-2.61C8.49 7.175 8.989 6 9 6c.011 0 .51 1.175 1.108 2.61'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpellCheck);
export default ForwardRef;
