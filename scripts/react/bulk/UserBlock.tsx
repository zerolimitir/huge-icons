import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUserBlock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.42 3.044c-.802.115-1.652.544-2.242 1.134a3.996 3.996 0 0 0 0 5.644 3.997 3.997 0 0 0 5.644 0 3.997 3.997 0 0 0 0-5.644A4.036 4.036 0 0 0 9.42 3.044m9.016 5.016c-1.473.294-2.509 1.618-2.425 3.099.025.446.196 1.03.391 1.338l.125.196 2.074-2.074c1.141-1.141 2.065-2.089 2.054-2.107a.855.855 0 0 0-.188-.122c-.667-.352-1.357-.464-2.031-.33m.948 3.336-2.075 2.075.157.104c.363.24 1.029.425 1.534.425 1.708 0 3.092-1.464 2.987-3.159a4 4 0 0 0-.088-.621c-.065-.245-.366-.9-.413-.9-.015 0-.96.934-2.102 2.076'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserBlock);
export default ForwardRef;
