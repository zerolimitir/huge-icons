import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTemperaturePlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.807 1.289c-.249.053-.465.281-.523.549-.024.113-.044.475-.044.804v.598h-.598c-.329 0-.691.02-.804.044-.563.121-.767.827-.358 1.236.199.199.399.24 1.162.24h.598v.598c0 .329.02.691.044.804.121.563.827.767 1.236.358.199-.199.24-.399.24-1.162V4.76h.598c.763 0 .963-.041 1.162-.24.409-.409.205-1.115-.358-1.236-.113-.024-.475-.044-.804-.044h-.598l-.001-.61c-.001-.336-.02-.691-.042-.789-.097-.421-.47-.647-.91-.552M11.7 4.316a.734.734 0 0 0-.398.413c-.055.131-.062.739-.062 5.28v5.131l-.217.113a2.224 2.224 0 0 0-.455.361c-.384.401-.568.849-.568 1.386 0 .895.597 1.678 1.477 1.936.667.196 1.45-.025 1.956-.552A1.91 1.91 0 0 0 14 17c0-.537-.184-.985-.568-1.386a2.224 2.224 0 0 0-.455-.361l-.217-.113-.001-5.14c-.001-4.912-.004-5.147-.075-5.3-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTemperaturePlus);
export default ForwardRef;
