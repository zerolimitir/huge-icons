import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLocation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.32 2.025c-1.803.165-3.36.75-4.76 1.788-.482.358-1.464 1.338-1.811 1.807a8.988 8.988 0 0 0-1.567 3.511c-.41 2.04-.134 3.759.959 5.969A15.872 15.872 0 0 0 7.6 19.711C9.21 21.18 10.787 22 12 22c2.333 0 5.876-3.047 7.748-6.665.826-1.596 1.252-3.113 1.252-4.46 0-1.852-.607-3.68-1.74-5.244-.321-.442-1.348-1.468-1.82-1.818a9.1 9.1 0 0 0-4.12-1.712c-.411-.062-1.644-.109-2-.076m1.436 6.072c.337.092.839.35 1.117.574C14.554 9.219 15 10.14 15 11c0 1.17-.775 2.329-1.849 2.766-1.509.614-3.162-.032-3.853-1.506-.226-.481-.277-.714-.277-1.26s.051-.779.277-1.26a3.033 3.033 0 0 1 2.205-1.7c.267-.049.988-.016 1.253.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocation);
export default ForwardRef;
