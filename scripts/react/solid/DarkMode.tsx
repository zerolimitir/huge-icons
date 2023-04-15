import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDarkMode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.34 2.281c-1.875.117-3.691.798-5.256 1.971-.501.375-1.468 1.344-1.839 1.84a9.906 9.906 0 0 0-1.892 4.48c-.114.705-.123 2.019-.02 2.728a9.962 9.962 0 0 0 1.912 4.608c.377.504 1.343 1.47 1.847 1.847a9.95 9.95 0 0 0 4.608 1.911c.333.048.732.07 1.3.07 1.556 0 2.894-.306 4.26-.974 1.052-.515 1.77-1.03 2.621-1.881s1.367-1.57 1.88-2.621c1.616-3.305 1.23-7.201-1.007-10.165-1.533-2.031-3.931-3.42-6.474-3.75a10.936 10.936 0 0 0-1.94-.064m-.1 9.725v8.205l-.262-.027c-1.446-.148-3.113-.875-4.281-1.866-1.499-1.273-2.465-2.951-2.825-4.909-.125-.681-.125-2.137 0-2.818C4.404 7.7 6.309 5.375 9.02 4.309c.6-.235 1.673-.495 2.09-.506l.13-.003v8.206'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDarkMode);
export default ForwardRef;
