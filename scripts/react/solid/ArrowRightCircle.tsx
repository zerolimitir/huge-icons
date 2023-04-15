import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowRightCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m2.22 6.318c.169.079 3.247 3.137 3.339 3.318.063.122.063.528 0 .65-.092.181-3.21 3.279-3.379 3.358a.734.734 0 0 1-.983-.983c.047-.1.404-.488.959-1.04l.885-.88-3.191-.02c-3.124-.02-3.193-.022-3.329-.102a1.003 1.003 0 0 1-.257-.249c-.098-.138-.117-.206-.117-.402a.7.7 0 0 1 .345-.64l.162-.107 3.193-.02 3.194-.02-.865-.86c-.541-.538-.892-.92-.939-1.02a.734.734 0 0 1 .983-.983'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowRightCircle);
export default ForwardRef;
