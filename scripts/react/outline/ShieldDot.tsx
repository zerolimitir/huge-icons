import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShieldDot = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.184 1.704a7.221 7.221 0 0 0-.54.121c-.267.076-5.297 2.297-5.846 2.582a4.294 4.294 0 0 0-1.23.929 4.417 4.417 0 0 0-1.109 1.965c-.144.544-.168 1.175-.082 2.159.45 5.166 1.984 8.019 5.883 10.94 1.335 1 1.867 1.308 2.589 1.5a4.4 4.4 0 0 0 3.257-.379c.5-.268 1.701-1.137 2.554-1.847a19.942 19.942 0 0 0 1.798-1.754c1.942-2.238 2.88-4.874 3.185-8.951.073-.982-.04-1.664-.407-2.443a4.561 4.561 0 0 0-2.007-2.106c-.475-.251-5.608-2.519-5.869-2.594-.655-.186-1.545-.236-2.176-.122m1.637 1.537c.242.061 4.922 2.108 5.596 2.448.68.342 1.143.81 1.464 1.479.306.639.337 1.18.158 2.773-.489 4.34-1.824 6.714-5.204 9.259-1.535 1.157-1.923 1.34-2.835 1.34-.753 0-1.12-.13-1.94-.69-3.329-2.272-4.933-4.356-5.694-7.398-.394-1.575-.637-3.999-.471-4.701a3.143 3.143 0 0 1 1.574-2.003c.54-.278 5.368-2.413 5.627-2.489a3.53 3.53 0 0 1 1.725-.018m-1.266 5.038a4.153 4.153 0 0 0-1.713.651c-.307.207-.847.791-1.057 1.142a4.05 4.05 0 0 0-.512 1.52 3.811 3.811 0 0 0 .512 2.337c.262.442.844 1.024 1.286 1.286a3.749 3.749 0 0 0 3.138.33c.569-.195.978-.454 1.43-.906.452-.452.711-.861.906-1.43a3.684 3.684 0 0 0-.865-3.81c-.382-.389-.559-.519-1.034-.758-.587-.297-1.436-.443-2.091-.362m1.21 1.613c.649.246 1.087.682 1.344 1.337.095.242.107.324.107.771s-.012.529-.107.771c-.357.909-1.161 1.469-2.109 1.469s-1.752-.56-2.109-1.469c-.095-.242-.107-.324-.107-.771 0-.444.012-.53.104-.765.298-.756.891-1.272 1.652-1.437.301-.065.933-.016 1.225.094'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShieldDot);
export default ForwardRef;