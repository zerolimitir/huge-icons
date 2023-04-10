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
            fillRule='evenodd'
            d='M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm.83 5.128 4 1.825c.11.05.214.11.31.177L12 11.148 6.86 8.38a2 2 0 0 1 .31-.177l4-1.825a2 2 0 0 1 1.66 0ZM6.037 9.641a2 2 0 0 0-.037.382v4.954a2 2 0 0 0 1.17 1.82l4 1.824.08.035v-6.208L6.037 9.64Zm6.713 9.015.08-.035 4-1.824a2 2 0 0 0 1.17-1.82v-4.954c0-.13-.013-.258-.037-.382l-5.213 2.807v6.208Zm0 2.344a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Zm7.851-17.602a.75.75 0 0 1 0 1.061l-.707.707a.75.75 0 0 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0ZM5.166 19.894a.75.75 0 1 0-1.06-1.06l-.707.707a.75.75 0 1 0 1.06 1.06l.707-.707ZM22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75ZM3 12.75a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5h1Zm17.601 7.85a.75.75 0 0 1-1.06 0l-.707-.707a.75.75 0 1 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06ZM4.106 5.166a.75.75 0 1 0 1.06-1.06l-.707-.708A.75.75 0 1 0 3.4 4.46l.707.707Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageCube);
export default ForwardRef;
