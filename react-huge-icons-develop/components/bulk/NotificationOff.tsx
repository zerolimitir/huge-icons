import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgNotificationOff = (
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
            d='M4.847 9.194c.391-3.454 3.232-6.058 6.607-6.058 3.376 0 6.217 2.604 6.608 6.058l.36 3.182c.09.791.41 1.536.92 2.135 1.08 1.272.203 3.262-1.437 3.262h-12.9c-1.642 0-2.518-1.99-1.438-3.262.51-.6.83-1.344.92-2.134l.36-3.183Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M11.454 21.954c1.448 0 2.68-.872 3.137-2.09a.523.523 0 0 0-.523-.523H8.841a.523.523 0 0 0-.523.522c.457 1.219 1.689 2.091 3.136 2.091Zm6.969-9.577-.36-3.183c-.392-3.454-3.232-6.058-6.608-6.058-2.433 0-4.384 1.14-5.32 2.72L18.03 17.751c1.468 0 2.392-1.969 1.312-3.24a3.99 3.99 0 0 1-.92-2.134Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.491 2.32a.784.784 0 0 0 0 1.11l18.818 18.817a.784.784 0 0 0 1.11-1.108L2.598 2.32a.784.784 0 0 0-1.108 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNotificationOff);
export default ForwardRef;
