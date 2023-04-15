import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpeakerPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.807 9.289c-.249.053-.465.281-.523.549-.024.113-.044.475-.044.804v.598h-.598c-.763 0-.963.041-1.162.24-.409.409-.205 1.115.358 1.236.113.024.475.044.804.044h.598v.598c0 .763.041.963.24 1.162.409.409 1.115.205 1.236-.358.024-.113.044-.475.044-.804v-.598h.598c.763 0 .963-.041 1.162-.24.409-.409.205-1.115-.358-1.236-.113-.024-.475-.044-.804-.044h-.598l-.001-.61c-.001-.335-.02-.691-.042-.789-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeakerPlus);
export default ForwardRef;
