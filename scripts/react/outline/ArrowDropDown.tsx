import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowDropDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.144 6.282A2.698 2.698 0 0 0 6.039 7.78c-.221.447-.285.723-.284 1.22 0 .464.063.76.24 1.14.194.415 3.717 6.422 3.893 6.637 1.076 1.315 3.147 1.316 4.222.002.18-.221 3.656-6.14 3.874-6.599.197-.414.261-.7.261-1.18.001-.497-.063-.772-.283-1.22-.284-.576-.665-.95-1.262-1.239a3.943 3.943 0 0 0-.56-.225c-.235-.059-7.528-.09-7.996-.034m7.931 1.591c.544.291.823.966.627 1.522-.104.295-3.661 6.348-3.831 6.52-.255.258-.472.343-.871.343-.395 0-.619-.087-.869-.337-.164-.163-3.731-6.238-3.833-6.526-.173-.492.03-1.115.461-1.414.329-.228.141-.219 4.301-.21l3.84.009.175.093'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDropDown);
export default ForwardRef;
