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
        <path fill='currentColor' d='M17 4v5.5H7V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1.343-10.32-.556-1.171a.863.863 0 0 0-1.574 0l-.556 1.171a.88.88 0 0 1-.66.5l-1.245.188c-.72.108-1.007 1.028-.486 1.556l.9.912c.207.21.301.511.252.807l-.212 1.288c-.123.746.63 1.314 1.273.962l1.113-.608a.848.848 0 0 1 .816 0l1.113.608c.644.352 1.396-.216 1.273-.962l-.212-1.288a.935.935 0 0 1 .252-.807l.9-.912c.52-.528.233-1.448-.486-1.556l-1.244-.188a.88.88 0 0 1-.66-.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMedalStar);
export default ForwardRef;
