import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcaseTwoLocks = (
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
            d='M11 3.125a2.25 2.25 0 0 0-2.25 2.25v1a.75.75 0 0 1-1.5 0v-1A3.75 3.75 0 0 1 11 1.625h2a3.75 3.75 0 0 1 3.75 3.75v1a.75.75 0 0 1-1.5 0v-1A2.25 2.25 0 0 0 13 3.125h-2Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M2.5 14.407a.5.5 0 0 0-.5.5v3.468a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-3.468a.5.5 0 0 0-.5-.5h-3.69c-.11 0-.198.09-.211.2-.091.752-.691 1.363-1.488 1.363-.798 0-1.397-.612-1.488-1.363-.013-.11-.102-.2-.212-.2h-4.8c-.11 0-.2.09-.213.2-.09.752-.69 1.363-1.487 1.363-.798 0-1.397-.612-1.488-1.363-.014-.11-.102-.2-.212-.2H2.5ZM6 6.375h12a4 4 0 0 1 4 4v2.262a.5.5 0 0 1-.5.5h-3.696c-.11 0-.198-.09-.212-.2-.092-.75-.694-1.358-1.488-1.358-.793 0-1.396.608-1.488 1.358-.013.11-.101.2-.212.2H9.602c-.11 0-.199-.09-.212-.2-.092-.75-.695-1.358-1.488-1.358-.794 0-1.396.608-1.488 1.358-.014.11-.102.2-.212.2H2.5a.5.5 0 0 1-.5-.5v-2.262a4 4 0 0 1 4-4Z'
        />
        <rect width={1.5} height={2.794} x={15.361} y={12.375} fill='currentColor' rx={0.75} />
        <rect width={1.5} height={2.794} x={7.161} y={12.375} fill='currentColor' rx={0.75} />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseTwoLocks);
export default ForwardRef;
