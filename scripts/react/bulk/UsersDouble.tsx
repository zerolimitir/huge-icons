import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUsersDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.42 3.044c-.802.115-1.652.544-2.242 1.134C5.253 6.103 5.781 9.344 8.22 10.57c1.299.652 2.833.539 4.08-.303.364-.245.891-.803 1.116-1.179.958-1.608.717-3.598-.594-4.91A4.036 4.036 0 0 0 9.42 3.044m4.84 9.98c-1.079.108-1.752.216-1.636.261.042.017.256.079.476.138 1.478.401 2.765 1.191 3.373 2.071.724 1.047.692 2.095-.095 3.141-.12.16-.218.298-.218.307 0 .009.05.008.11-.001l.53-.082c1.979-.302 3.543-1.145 4.035-2.175.135-.284.145-.33.145-.684 0-.357-.009-.399-.151-.695-.512-1.074-2.174-1.92-4.329-2.206-.459-.06-1.903-.109-2.24-.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUsersDouble);
export default ForwardRef;
