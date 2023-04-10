import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDribbble = (
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
            stroke='currentColor'
            strokeWidth={1.5}
            d='M16.935 3.3A9.954 9.954 0 0 0 12 2a9.96 9.96 0 0 0-6.455 2.362m11.39-1.061c-4.79 4.63-7.808 11.083-7.931 18.242m7.931-18.242a10.008 10.008 0 0 1 4.952 7.19M5.545 4.363C8.24 8.366 12.812 11 18 11a15.02 15.02 0 0 0 3.887-.508M5.545 4.362A9.978 9.978 0 0 0 2 12c0 4.48 2.945 8.27 7.004 9.543M2 12.853A14.977 14.977 0 0 1 7 12c5.195 0 9.773 2.641 12.465 6.654m-10.461 2.89A9.994 9.994 0 0 0 12 22a9.975 9.975 0 0 0 7.465-3.346m0 0A9.962 9.962 0 0 0 22 12c0-.513-.039-1.017-.113-1.508'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDribbble);
export default ForwardRef;
