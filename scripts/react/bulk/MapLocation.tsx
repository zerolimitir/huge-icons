import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapLocation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.52 2.023c-.055.009-.235.037-.4.061a5.294 5.294 0 0 0-1.38.445c-1.39.693-2.33 1.884-2.644 3.351-.096.452-.097 1.356-.002 1.873.295 1.592 1.14 3.362 2.221 4.653.825.984 1.85 1.593 2.685 1.593s1.86-.609 2.685-1.593c1.079-1.288 1.926-3.064 2.221-4.653.095-.517.094-1.421-.002-1.873-.409-1.908-1.937-3.387-3.905-3.78-.296-.059-1.287-.111-1.479-.077m1.087 3.106c.614.281.985.968.87 1.61a1.569 1.569 0 0 1-.87 1.135c-.196.091-.279.106-.607.106-.328 0-.411-.015-.607-.106-.617-.29-.987-.977-.87-1.614a1.544 1.544 0 0 1 1.048-1.204c.268-.088.762-.053 1.036.073'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocation);
export default ForwardRef;
