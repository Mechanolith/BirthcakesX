import React, { PropsWithChildren } from "react";
import { IPerson } from "../data/people";

interface IProps {
    guest: IPerson;
    isYeOlde: boolean;
}

export const Invitation = (props: PropsWithChildren<IProps>) => 
{
    const guest = props.guest;

    return (
        <div className="invitation">
            {props.isYeOlde ? 
            <div className="invitation-ye-olde">
                <div className="invitation-header">
                Mine most {guest.greetingAdjective} subject, {guest.title}, I greeteth thee! <br/><br/>
                </div>
                I come to thee this finest of dayeths to bringeth thine a most wonderous proclamation. 
                The age of ages is upon us, the sun quaketh and the earth sundereth beneatheth ourn feet as the most birthed of cakes descendeth from on high.
                And so I must asketh ye to alight yeself unto my abode so that we might join ournselfs togetherst in a most holy celebration of this, <b><i>The Tenth Age of The Panned Cake</i></b>!<br/><br/>

                Now ye must be warnethed, as by the birthed rites of the panned cakes, thines attire must be suitethed to this new era. 
                So prepereth thines doublets, washeth thines robes, and polisheth thines chainmaileth, for tis the demand of the <b><i>Tenth Age</i></b>!
                But fret not if this is beyondeth thines capabilties, thou shalt not be forgivine by the most glorious and holy of panned cakes, but thou shalt at least be forgivine by mine most royal benevolence.<br/><br/>

                Thine's presence is demanded on the 15th dayeth of the second montheth of this <b><i>Tenth Age</i></b>, upon the sixth hour of the setting sun. 
                Frivolities, japes, tomfooleries, and banquets shall be provided for all in celebration of this most momentus <b><i>Tenth Age</i></b>!
                Yet those amongstest you, most verily devoutethed, may elect to take the honoureth of partaking in ourn <i>midnighteth sacrament</i>!
                Only those that can endure the crueleth embraceth of lord time himself may taste upon their lips the most succulenteth of sweet, heavenly, ambrosias thateth is... <i>The Pancakes</i>... <br/><br/>

                And the peasants may cry <i>"Oh! Oh but great Prince, please take mercy upon us unwashed and unfaithful! 
                    We have such desireth for the sweet nectar of Pancakes, yet we see not it fit to endure even such simple suffering in their name for we must toil upon the morrow!
                    Wouldst thou not find it in ye most royal and benevolent of hearts to prepareth some at an hour beforeth thines sacrament?" </i>
                And to these peasants {'<'} I say no. Nay, I <i>scream</i> <b>NO!</b> Ye that will not accepteth such meagre sacrifice have to right to reapeth such joy! Begone, foul peasants! Begone!<br/><br/>

                And now, my {guest.greetingAdjective} {guest.title}, I requireth from thou responses in twine. 
                Firstmost ye musteth informeth me of thines intent to attendeth mine grand celebration of this most imperious <b><i>Tenth Age</i></b> in any capactiy (and any supplicant thou might also wisheth to entail).
                And furthermost, ye musteth informeth me of thines (and thines possible supplicant's) intent to participateth in mine most holy midnight sacrament, so that thines proper ritualistic components might be preparedethed for thou.
                Finalmost, I must remind ye that as thines most beneficent and engraced ruler ye are free of the burdens of any offerings in ourn great celebration. Rejoice!<br/><br/>
                
                It is with a most joyest heart that I eagerly awaiteth thines correspsondance in responseth to this most honoured of invitations.<br/><br/>
                Your Most Beloved,<br/>
                The Prince of Pancakery
            </div>
            : 
            <div className="invitation-modern">
                Hey {guest.name},<br/><br/>

                It's just about that time of year again (my birthday), the time for another edition of Ultra Birthcakes. Specifically, Ultra Birthcakes X.<br/><br/>

                Now because this is the <i>tenth</i> year(!!!) in a row I've been running this, I've decided I'm gonna do something a lil special. Which is to say I'm making all of you dorks do a stupid fucking medieval pancake themed LARP with me.
                Typically, costume-based events are the bane existance, and frankly this is no different. So if you're not into it, rest assured I won't be doing it again for another ten years.<br/><br/>

                If you're reading this, you should already have a role assigned ({guest.title}), so ideally that's outfit goal. But don't stress if you can't achieve that, anything vaguely in theme is fun too.
                But most importantly, if you can't/don't want to do this at all I totally absolutely get you, that's fine too. Don't even goddamn stress. <br/><br/>
                
                Other than that, it's a pretty standard affair. Show up at my place at 6pm on the 15th of February.
                We hang out and have dinner and then - if you've got the strength for it - at midnight we enjoy my finest culinary creation, passed down through the generations of my family: <b><i>pancakes</i></b> (with caramel sauce, and other toppings probably).
                And in case you didn't get it from the other side of the invitation, the pancake time is non-negotiable.<br/><br/>

                Please let me know if you intend to show up at all, and also if you intend to stay until midnight for pancakes.
                Let me know if you wanna bring a plus-one, and it should be fine as long as we're not getting too crowded. Also, as I say every year, don't bother with any sort gift, you're appreciated as is.
                Oh, and I moved about a year ago, so if you need to know where I live now, let me know and I'll update you.<br/><br/>

                Anyway, I'm looking forward to hanging out with you while doing this dumb terrible idea. <br/><br/>

                See you there,<br/>
                Jack
            </div>
            }
        </div>
    );
}