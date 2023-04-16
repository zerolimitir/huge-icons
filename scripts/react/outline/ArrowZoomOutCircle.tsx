import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowZoomOutCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.34 2.281C7.073 2.553 3.439 5.66 2.499 9.84a10.086 10.086 0 0 0 0 4.32 9.76 9.76 0 0 0 7.341 7.341c1.393.313 2.93.312 4.336-.003 3.289-.739 5.985-3.188 7.068-6.422a9.928 9.928 0 0 0 .257-5.236 9.76 9.76 0 0 0-7.341-7.341 10.445 10.445 0 0 0-2.82-.218m1.621 1.521a8.318 8.318 0 0 1 5.894 3.608c.543.802 1.034 1.968 1.222 2.899.124.611.163 1.019.163 1.691 0 1.332-.263 2.465-.845 3.642a8.146 8.146 0 0 1-3.753 3.753c-1.177.582-2.31.845-3.642.845a7.867 7.867 0 0 1-3.626-.836 8.266 8.266 0 0 1-4.572-6.443c-.054-.436-.054-1.486 0-1.922.195-1.582.857-3.123 1.846-4.299.337-.4.751-.811 1.168-1.159 1.084-.904 2.682-1.585 4.168-1.775.395-.051 1.579-.053 1.977-.004m-.146 3.475c-.485.12-.717.727-.432 1.131.202.285.337.328 1.107.352l.671.02-2.701 2.7-2.7 2.7v-.568c0-.73-.043-.935-.238-1.13-.349-.349-.903-.279-1.169.149l-.093.149v3.453l.12.17a.965.965 0 0 0 .28.253c.153.08.228.085 1.713.096 1.793.014 1.914.001 2.146-.231.399-.399.212-1.098-.33-1.235-.102-.025-.451-.046-.777-.046H9.82l2.7-2.7 2.7-2.701.02.691c.018.633.028.702.113.839.362.583 1.228.441 1.366-.222.031-.15.041-.718.033-1.774-.011-1.485-.016-1.56-.096-1.713a.965.965 0 0 0-.253-.28l-.17-.12-1.646-.007c-.906-.004-1.703.007-1.772.024'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowZoomOutCircle);
export default ForwardRef;