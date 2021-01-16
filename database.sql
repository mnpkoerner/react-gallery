-- database name: react_gallery

-- creates table

CREATE TABLE "cards" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR NOT NULL,
    "description" VARCHAR(215) NOT NULL,
    "likes" INT DEFAULT 0
);

-- base data

INSERT INTO "cards" ("path", "description")
VALUES
('images/11_1.jpg', 'Back in minneapolis, and I''ve been away from home for so long I forget which key is home. Nothing inside is quite how I left it and everything feels familiar.'),
('images/11_2.jpg', 'I know the sun is somewhere, and I need to be careful and kind. I''m overwhelmed by silence and a future that never really shows up.'),
('images/11_3.jpg', 'The trash is full of broken glass and Tommy told me not to trust the pyramids even though they''ve been around for a while and some people get church at 3am.'),
('images/11_4.jpg', 'On the road again and streetlamps tower over Nowhere, Illinois. I waited in line behind a cricket at the vending machine and we''re still forever from the gold coast.'),
('images/11_5.jpg', 'Just outside Detroit, no one told the wedding that a rodeo was happening. After I learn some alchemy, I''ll fall asleep to the light outside my window and static from the TV screen.'),
('images/11_6.jpg', 'We''re off to Canada and everything feels like pulling the garden from the weeds and the fall before the climb. And I remember when we were kings of tomorrow together.'),
('images/11_7.jpg', 'The snow is new in Ontario and I''m drifting between familiar nightmares in the passenger seat. Crowns adorn the overpass behind the sunrise district.'),
('images/11_8.jpg', 'I confuse lights for people sometimes and I keep a place set for you in my heart. When I rememeber spring, I feel my hands go numb and the past contains the present.'),
('images/11_9.jpg', 'I''m back in Lancaster and covered in emotional sludge. Past the twin villians on the road to Kutztown there''s a whole city out of busines and up for rent.'),
('images/11_10.jpg', 'I know I''ll be home sooner than I think and yesterday feels like forever. In Brooklyn, they''re decorated for Christmas and crows are eating a cat eyes first.'),
('images/11_11.jpg', 'Don''t listen to what they tell you in New Jersey because I''m pretty certain pork roll is just another word for baloney. I''m hungry and I don''t want to eat alone.'),
('images/11_12.jpg', 'The world is mostly ordinary things in extraordinary places and these rooms all felt bigger the first time I was here.'),
('images/11_13.jpg', 'In Columbus, I''m waiting for the world to end in the space you left behind and listening to the world in stereo.'),
('images/11_14.jpg', 'Stuck on road noise just outside Chicago, and I turn up the volume click by click. As far as I can tell, it''s always wintere here and they have the best pickles.'),
('images/11_15.jpg', 'Everything sucked and nothing was cool because the moon keeps closing and I stepped in the same puddle twice.'),
('images/11_16.jpg', 'After one night in Omaha, the wheels are spinning while the world stays still. There''s shudders behind the curtains and the classics play in black and white.'),
('images/11_17.jpg', 'Everything sounds flat on the inside. Time is scrambled and I just want to sleep and the whole bar just keeps ordering shots.'),
('images/11_18.jpg', 'I parked at a pretty dumb angle last night, and usually I cook for myself when I feel lonely.'),
('images/11_19.jpg', 'When I''m left alone, I dial up the old thunder and watch the past stretch backwards into miles and miles of miles and miles.'),
('images/11_20.jpg', 'I''m sick to my stomach and my teeth won''t stop buzzing. And sometimes I just want to disappear into memory.'),
('images/11_21.jpg', 'The traffic runs both ways and I wonder which songs stay locked inside pianos where half the keys are gone. When I close my eyes the room is full of strangers and stranger numbers.'),
('images/11_22.jpg', 'It''s too late to tell some people that their shoes are untied. I missed a few candles and an entire person.'),
('images/11_23.jpg', 'There''s shadows on the clouds and I''m sick to death of words until the whole murder appears to love it all at it''s worst.'),
('images/11_24.jpg', 'I''ll pull a single thread from the gold and lose some blood in the soup. Everything good is alive today and I''m full of sleep and wonder.'),
('images/11_25.jpg', 'I think there''s more I need than feeling good because I want to feel complete.'),
('images/11_26.jpg', 'Drawing horses is difficult and life rushes by without a blur. Our roads diverged once and now we''re back together.'),
('images/11_27.jpg', 'Everytime I think of you I remember something different so maybe I''ve managed to keep you alive and growing in my heart.'),
('images/11_28.jpg', 'There''s no time to waste and eleven legs between them all.'),
('images/11_29.jpg', 'Blueberry pancakes and three cups of coffee and only a few more days before we hit the road again. I think Thanksgiving leftovers taste the best because I remember someone loves me.'),
('images/11_30.jpg', 'I can''t rememeber your birthday and I''m grateful for your smile. My old friends see right through me and organize the noise.');
