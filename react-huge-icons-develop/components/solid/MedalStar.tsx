import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMedalStar = (
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
            d='M17 4v1.92a9.456 9.456 0 0 0-5-1.42 9.46 9.46 0 0 0-5 1.42V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Zm3 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7.213-3.491.556 1.171a.88.88 0 0 0 .66.5l1.245.188c.72.108 1.007 1.028.486 1.556l-.9.912a.935.935 0 0 0-.252.807l.212 1.288c.123.746-.63 1.314-1.273.962l-1.113-.608a.848.848 0 0 0-.816 0l-1.113.608c-.644.352-1.396-.216-1.273-.962l.212-1.288a.935.935 0 0 0-.252-.807l-.9-.912c-.52-.528-.233-1.448.486-1.556l1.244-.188a.88.88 0 0 0 .66-.5l.557-1.171a.863.863 0 0 1 1.574 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMedalStar);
export default ForwardRef;
