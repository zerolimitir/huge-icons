import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOpenBoxAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.807 1.289c-.249.053-.465.281-.523.549-.024.113-.044.475-.044.804v.598h-.681c-.525 0-.716.014-.83.062a.748.748 0 0 0 0 1.396c.114.048.305.062.83.062h.681l.001.69c.001.585.012.714.075.85a.743.743 0 0 0 1.368 0c.063-.136.074-.265.075-.85l.001-.69h.681c.525 0 .716-.014.83-.062a.748.748 0 0 0 0-1.396c-.114-.048-.305-.062-.83-.062h-.681l-.001-.61c-.001-.336-.02-.691-.042-.789-.097-.421-.47-.647-.91-.552M3.002 7.498l-.999 1.497 1.688.858C5.97 11.011 9.953 13 9.99 12.999c.016-.001.471-.666 1.01-1.479.539-.813.989-1.478 1-1.478.011 0 .461.665 1 1.478.539.813.994 1.478 1.01 1.479.037.001 4.02-1.988 6.299-3.146l1.688-.858-.999-1.497L20 6l-4 2-4 2-4-2-4-2-.998 1.498'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxAdd);
export default ForwardRef;
