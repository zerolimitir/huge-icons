import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBoxArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8 5.912v3.912l.104.208c.233.468.735.671 1.239.502.17-.058.331-.198 1.177-1.033C11.567 8.47 11.608 8.44 12 8.44c.392 0 .433.03 1.48 1.061.846.835 1.007.975 1.177 1.033.504.169 1.006-.034 1.239-.502L16 9.824V2H8v3.912m11.512 9.405a2.54 2.54 0 0 0-.42.185c-.214.125-1.611 1.482-1.739 1.69-.393.636.233 1.39.918 1.106.083-.034.33-.241.559-.469l.41-.408v2.268c0 1.505.015 2.336.044 2.473.163.758 1.269.758 1.432 0 .029-.137.044-.968.044-2.47v-2.265l.433.423c.487.475.601.532.935.468a.723.723 0 0 0 .617-.647c.041-.303-.061-.454-.871-1.278-.404-.411-.824-.804-.934-.872-.435-.27-.979-.347-1.428-.204'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxArrowUp);
export default ForwardRef;
