import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgOpenBox = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='m18.323 5.162-5.429-2.715a2 2 0 0 0-1.788 0L5.677 5.162 12 8.323l6.323-3.161ZM4 11.677v5.087a2 2 0 0 0 1.106 1.789l6 3a2 2 0 0 0 1.788 0l6-3A2 2 0 0 0 20 16.764v-5.087l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51L12 12.704l-.752 1.128a1.5 1.5 0 0 1-1.919.51L4 11.677Zm7.976-1.661-7.96-3.993L2.029 8.98l8.002 4.023 1.945-2.987Zm0 0 2.022 2.987 8.02-3.965L19.99 6.05l-8.015 3.966Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBox);
export default ForwardRef;
