import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMusicThin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.47 9.043a4.34 4.34 0 0 0-1.205.422c-.795.467-1.307 1.107-1.609 2.015-.106.32-.113.381-.113 1.02s.007.7.113 1.02c.302.909.794 1.525 1.606 2.011.57.341 1.442.523 2.11.438 1.708-.215 2.945-1.476 3.104-3.162.211-2.25-1.752-4.094-4.006-3.764m-11 6a4.34 4.34 0 0 0-1.205.422c-.795.467-1.307 1.107-1.609 2.015-.106.32-.113.381-.113 1.02s.007.7.113 1.02c.302.909.794 1.525 1.606 2.011.57.341 1.442.523 2.11.438 1.708-.215 2.945-1.476 3.104-3.162.211-2.25-1.752-4.094-4.006-3.764'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicThin);
export default ForwardRef;
