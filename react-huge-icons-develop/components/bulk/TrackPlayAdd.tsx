import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackPlayAdd = (
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
            d='M12 2.75a9.25 9.25 0 1 0 2.056 18.27.75.75 0 1 1 .332 1.464A10.78 10.78 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12c0 .82-.092 1.62-.266 2.388a.75.75 0 1 1-1.463-.332A9.25 9.25 0 0 0 12 2.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m11.17 9.085 3.147 1.573c1.105.553 1.105 2.13 0 2.684l-3.146 1.573A1.5 1.5 0 0 1 9 13.573v-3.146a1.5 1.5 0 0 1 2.17-1.342Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M19 15.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V22a.75.75 0 0 1-1.5 0v-2.25H16a.75.75 0 0 1 0-1.5h2.25V16a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPlayAdd);
export default ForwardRef;
