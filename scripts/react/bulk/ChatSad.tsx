import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatSad = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.08 13.321c-.799.141-1.712.53-2.412 1.027-.489.347-1.278 1.144-1.367 1.382-.212.561.321 1.148.899.991.147-.04.251-.122.562-.44.872-.889 1.794-1.376 2.827-1.491 1.293-.145 2.561.373 3.651 1.492.31.318.413.399.56.439a.774.774 0 0 0 .866-.393.879.879 0 0 0-.003-.688c-.102-.199-.945-1.017-1.332-1.292-1.268-.903-2.827-1.279-4.251-1.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatSad);
export default ForwardRef;
