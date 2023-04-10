import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackageCube = (
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
            d='m16.83 8.203-4-1.824a2 2 0 0 0-1.66 0l-4 1.824A2 2 0 0 0 6 10.023v4.954a2 2 0 0 0 1.17 1.82l4 1.824a2 2 0 0 0 1.66 0l4-1.824a2 2 0 0 0 1.17-1.82v-4.954a2 2 0 0 0-1.17-1.82Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m16.83 8.203-4-1.824a2 2 0 0 0-1.66 0l-4 1.824A2 2 0 0 0 6.147 9.27L12 12l5.852-2.731a2 2 0 0 0-1.022-1.066Z'
        />
        <path
            fill='currentColor'
            d='M12 10.25a.75.75 0 0 1 .75.75v7.656a2 2 0 0 1-1.5 0V11a.75.75 0 0 1 .75-.75Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 19a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm8.601-16.852a.75.75 0 0 1 0 1.061l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0ZM5.166 18.834a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0ZM22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm-19 0a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Zm16.851 8.601a.75.75 0 0 1-1.06 0l-.707-.707a.75.75 0 0 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06ZM5.166 5.166a.75.75 0 0 1-1.06 0l-.708-.707A.75.75 0 1 1 4.46 3.4l.707.707a.75.75 0 0 1 0 1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageCube);
export default ForwardRef;
