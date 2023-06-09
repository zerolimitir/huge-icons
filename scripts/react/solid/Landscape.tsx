import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLandscape = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.811 4.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 12.213.063 12.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-6.143-.006c-3.379-.004-6.201.008-6.272.025m-.308 2.763c-1.016.172-1.947.934-2.301 1.883-.193.517-.201.631-.201 3.067-.001 2.5.007 2.604.233 3.159a3.046 3.046 0 0 0 1.615 1.615c.6.245.274.234 7.151.234 5.5 0 6.321-.008 6.581-.062a3.003 3.003 0 0 0 2.357-2.357c.091-.44.091-4.722 0-5.162a2.96 2.96 0 0 0-1.642-2.107c-.657-.316-.005-.289-7.176-.297-3.531-.003-6.509.009-6.617.027m.308 11.237a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 12.213.063 12.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-6.143-.006c-3.379-.004-6.201.008-6.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLandscape);
export default ForwardRef;
