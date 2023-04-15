import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRedo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.635 2.277a.787.787 0 0 0-.445.401c-.089.18-.09.204-.102 2.106l-.012 1.924-.544.026c-.3.014-1.157.026-1.906.026-1.287 0-1.37.004-1.529.081a.863.863 0 0 0-.283.247c-.095.138-.114.206-.114.412s.019.274.114.412c.066.094.187.2.283.247.163.079.236.081 2.537.081 2.041 0 2.389-.009 2.516-.062a.61.61 0 0 0 .375-.358c.068-.15.073-.317.074-2.567.001-1.606-.013-2.445-.042-2.52a.896.896 0 0 0-.358-.393c-.135-.07-.435-.104-.564-.063'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRedo);
export default ForwardRef;
