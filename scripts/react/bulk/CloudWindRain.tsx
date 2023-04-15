import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudWindRain = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.697 15.316a.95.95 0 0 0-.284.221c-.066.081-.352.625-.635 1.21-.431.894-.513 1.094-.513 1.249.002.665.792.996 1.251.524.185-.191 1.2-2.19 1.231-2.425a.765.765 0 0 0-.445-.78.688.688 0 0 0-.605.001m4.001-.001a.903.903 0 0 0-.263.194c-.102.122-2.042 4.926-2.142 5.307-.191.725.697 1.238 1.223.706.124-.125.288-.505 1.194-2.769.658-1.645 1.05-2.674 1.049-2.758a.855.855 0 0 0-.075-.295c-.181-.392-.605-.558-.986-.385m4 0a.977.977 0 0 0-.277.209c-.134.158-1.071 2.057-1.139 2.307a.747.747 0 0 0 .342.812c.287.177.754.09.953-.179.181-.245 1.149-2.202 1.171-2.369.056-.429-.316-.853-.748-.853a.897.897 0 0 0-.302.073'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudWindRain);
export default ForwardRef;
