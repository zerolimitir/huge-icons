import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHanger = (
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
            d='m13.724 7.08.626.414-.626-.413ZM9.201 6a.75.75 0 0 0 1.5 0h-1.5Zm11.937 10.372.43-.615-.43.615Zm-18.276 0-.43-.615.43.615ZM13.299 6c0 .246-.073.474-.201.668l1.252.826c.283-.43.449-.944.449-1.494h-1.5ZM10.7 6c0-.673.565-1.25 1.299-1.25v-1.5C10.471 3.25 9.2 4.464 9.2 6h1.5ZM12 4.75c.734 0 1.299.577 1.299 1.25h1.5c0-1.536-1.27-2.75-2.799-2.75v1.5Zm-.429 5.865 9.138 6.373.858-1.23-9.138-6.373-.858 1.23Zm8.377 8.635H4.052v1.5h15.896v-1.5ZM3.29 16.988l9.138-6.373-.858-1.23-9.138 6.372.858 1.23Zm17.418 0c.985.687.54 2.262-.761 2.262v1.5c2.684 0 3.878-3.418 1.62-4.993l-.859 1.23ZM4.052 19.25c-1.3 0-1.746-1.575-.761-2.262l-.858-1.23c-2.259 1.574-1.065 4.992 1.62 4.992v-1.5Zm9.046-12.582c-.13.196-.29.398-.48.628-.182.22-.396.473-.587.73-.377.506-.781 1.169-.781 1.974h1.5c0-.3.151-.631.484-1.077.163-.22.342-.431.541-.673a8.97 8.97 0 0 0 .575-.756l-1.252-.826Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHanger);
export default ForwardRef;
